import { LOGO_URL } from "../utils/constants"
import { useState, useContext } from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")
    
    const onlineStatus = useOnlineStatus()

    const { loggedInUser } = useContext(UserContext)
    // console.log(loggedInUser)

   //Subscribing to the store using a selector
   const cartItems = useSelector((store) => store.cart.items)
//    console.log(cartItems)
    

    return(
        <div className="flex justify-between shadow-lg m-2 bg-pink-100 sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-contaianer">
                <img className="w-28" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center ">  
                <ul className="flex p-4 m-4">
                    <li className= "px-4">
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className= "px-4">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className= "px-4">
                        <Link to='/about'>About Us</Link>
                    </li>
                    <li className= "px-4">
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className= "px-4">
                        <Link to='/grocery'>Grocery</Link>
                    </li>
                    <li className= "px-4 font-bold text-xl">
                        <Link to='/cart'>Cart - ({cartItems.length} Items)</Link>
                    </li>
                    <button className="login-btn"
                        onClick={() => {
                            btnNameReact === "Login" //using togglebtn login -> logout -> login -> logout .....
                                ? setBtnNameReact("Logout")
                                : setBtnNameReact("Login")
                        }} >
                        {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header





