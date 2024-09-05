import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"
import UserContext from "../utils/UserContext"

class About extends Component{

    constructor(props){
        super(props)

    }

    componentDidMount(){
        // console.log("Parent component did mount")
    }

    render(){
        

        return(
            <div>
            <h1>About</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer> 
                    {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is React</h2>
            <UserClass name={"Suma Teki Class based Component"} location ={" Andaluru"}/>
        </div>
        )
    }
}


export default About