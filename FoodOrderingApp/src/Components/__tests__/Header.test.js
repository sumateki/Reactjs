import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("Should render Header component with login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    //one way --> good way 
    const loginButton = screen.getByRole("button", {name: 'Login'})

    //2nd way
    // const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument()
    
})

it("Should render Header component with a Cart items 0", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
 
    const cartItems = screen.getByText("Cart - (0 Items)")

    expect(cartItems).toBeInTheDocument()   
})

//check whether cart item is there or not
it("Should render Header component with a Cart item", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    ) 

    //we can use regex swell using text
    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument()   
})

// login to logout
it("Should change login button to logout onClick ", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
   
    const loginButton = screen.getByRole("button",{ name: "Login"})

    //works as Onclick
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{ name: "Logout"})

    expect(logoutButton).toBeInTheDocument()   
})



