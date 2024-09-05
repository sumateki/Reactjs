import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"
import { useEffect, useState, useContext } from "react"
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"


const Body = () =>{
    //normal JS variable -- give super powers -- use "state vriable"
    // let listOfRestaurantsJS = []
    //Local State Varible -- super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRes, setFilteredRes] = useState([])  
    const [searchText, setSearchText] = useState("")

    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    // whenever state variable update, react triggers a reconciliation cycle(re-render the component)
    // console.log('Body Rendered',listOfRestaurants)

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () =>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7565815&lng=81.6769714&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") // fetch() is given to us by browser
        const json = await data.json()

        //using optional chaining ?.
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])  
        setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])    
    }

    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false) return <h1>Looks like u r offline, Please check ur internet connectivity!!</h1>
    
    //conditional rendering --> rendering on the basis of condition
    // if(listOfRestaurants.length === 0){
         // return <h1>Loading..</h1> //instaed of using this, use shimmer UI
    //     return <Shimmer />
    // }

    const { userName, setUserName } = useContext(UserContext)

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body" >
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                            data-testid="searchInput"
                            className="border border-solid border-black" 
                            value={searchText} 
                            onChange={(e) =>{
                                setSearchText(e.target.value)
                            }}>
                        </input>
                    <button
                        className="px-4 py-1 bg-green-100 m-4 rounded-lg" 
                        onClick={()=>{
                            console.log(searchText)
                            //filter the restaurant cards and update the UI
                            //searchText
                            const filteredRes = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            )   
                            setFilteredRes(filteredRes)    
                        }}
                    >
                        Search
                    </button>
                </div>

                <div className="m-4 p-4 flex items-center" >
                    <button 
                        data-testid="resCard"
                        className="px-4 py-1 bg-gray-100 rounded-lg" 
                        onClick={()=>{
                            //Filter logic 
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.2 
                            )
                            setFilteredRes(filteredList)
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>

                <div className="m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input type="text" 
                        className="border border-black p-1 ml-2" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    >
                    </input>
                </div>
            </div> 
            <div className="flex flex-wrap">
                {/* dynmically sending data to the cards ---> using props */}
                {/* using loop(map) for getting array list */}
                {filteredRes
                    .map((restaurant)=>(
                    <Link 
                        key ={restaurant.info.id}
                        to={"/restaurants/"+restaurant.info.id}
                        
                    >
                        {/* HIgh order components for displaying the promoted restaurants
                         {
                            restaurant.data.promoted ? (
                                <RestaurantCardPromoted resData = {restaurant} />
                            ): (
                                <RestaurantCard  resData = {restaurant} />
                            )
                        } */}
                        <RestaurantCard  resData = {restaurant}/>
                    </Link>
                ))}  
            </div>
        </div>
    )
}

export default Body

