import { useContext } from "react"
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/UserContext"

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }

const RestaurantCard = (props) =>{
    const { resData } = props
    // console.log(resData)

    const { loggedInUser } = useContext(UserContext)

    // destructuring
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.info
    // console.log(props)  //props passed as objects
    return(
        <div 
            data-testid="resCard"
            className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
                className="h-[150px] w-[200px] rounded-lg "
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId  } 
            />
            
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>★{avgRating}</h4>
            <h4>{costForTwo}</h4> 
            <h4>{sla?.slaString}</h4>
            <h4>User: {loggedInUser}</h4>

        </div>
    )
}


//Higher Order Component
//input -> Restaurantcard ==> returns -> ResturantCardPromoted

// export const withPromotedLabel = (RestaurantCard) =>{
//     return(props)=>{
//         return(
//             <div>
//                 <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
//                 <RestaurantCard {...props}/>
//             </div>
//         )
//     }
// }

export default RestaurantCard

