//class based component --> class, name of the class, extends, react.compo
// use render method inside it use return

import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            userInfo:{
                name: 'Dummy',
                location: 'Default',
                avatar_url: 'http://dummy-prf'

            }
        }
        
    }

    async componentDidMount(){
        //make an api call
        const data = await fetch("https://api.github.com/users/sumateki")
        const json = await data.json()

        this.setState({
            userInfo: json,
        })

        console.log(json)
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Component will unmount") //called when we change the page
    }
    render(){
        const { name, location, avatar_url} = this.state.userInfo
        return(
            
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @sumateki5</h4>
            </div>
        )  
    }
}

export default UserClass