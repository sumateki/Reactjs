import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import './App.css'
import Header from "./Components/Header"
import Body from "./Components/Body"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import Cart from "./Components/Cart"
import RestaurantMenu from "./Components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"


//chunking, code splitting, dynamic bundling, lazy loading --> split the components into small chunks make it a bundle
const Grocery = lazy(() => import("./Components/Grocery"))


const AppLayout = () => {

    //authentication code
    const [userName, setUserName] = useState()
    useEffect(() =>{
        //make an api call to send UN & PW
        const data = {
            name: "Suma Teki"
        }
        setUserName(data.name)
    }, [])

    return(
        <>
            <Provider store= {appStore}>
                <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                    <div className="app">
                        <Header/>
                        <Outlet/>
                    </div>
                </UserContext.Provider>
            </Provider>
        </>
    )}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            }, 
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /> </Suspense>,
            },
            {
                path: "/cart",
                element: <Cart />,
            }, 
            {
                path: "/restaurants/:resId",  //:resId will be dynamic
                element: <RestaurantMenu />,
            },

        ],
        errorElement: <Error />
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)

// export default AppLayout

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<AppLayout />)





