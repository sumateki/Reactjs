
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import ResCategory from "./ResCategory"
import { useState } from "react"


const RestaurantMenu = () =>{

    const {resId} = useParams()
    
    const resInfo = useRestaurantMenu(resId)

    //accordian expand nd hide 
    const [showIndex, setShowIndex] = useState(null)

    if(resInfo === null) return <Shimmer />

    const {
        name,
        avgRating,
        cuisines,
        costForTwoMessage 
    } = resInfo?.cards[2]?.card?.card?.info

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.card?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories)

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl" >{name}</h1> 
            <p className="font-bold text-lg">{cuisines.join(", ")}  -  {costForTwoMessage}</p>
            
            {/* Categories Accordians */}
            {categories.map((category, index) => (
                <ResCategory 
                    key={category?.card?.card?.title} 
                    data= {category?.card?.card}
                    showItems= {index === showIndex ? true : false}
                    // toggle functionality for accordian
                    setShowIndex = {() => setShowIndex(index)}
                />
            ))}
                   
        </div>
    )
}
export default RestaurantMenu

