import React from "react"
import ReactDOM from "react-dom/client"


const parent = React.createElement(
    "div",
    {id: "parent"},  //parent div
    [
        React.createElement(
            "div", 
            {id: "child1"}, [ //child 1 div
            React.createElement("h1", {}, "This is h1 tag"),
            React.createElement("h2", {}, "This is h2 tag")
        ]),
        React.createElement(
            "div", 
            {id: "child2"}, [ //child 2 div
            React.createElement("h1", {}, "This is h1 tag"),
            React.createElement("h2", {}, "This is h2 tag")
        ]), 
    ]
)

/*
    code becomes very lengthy... 
    so to overcome it there is one way ---------> JSX
    JSX makes it easy to write
*/
console.log(parent) //returns obj

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)


















