import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA from "../mocks/mockResMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=> {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should load Restaurant Menu component", async()=>{

    await act(async() => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
            
        )
    )

    const accordianHeader = screen.getByText("Fried Rice (21)")
    fireEvent.click(accordianHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(21)

    expect(screen.getByText("Cart - (0 Items)")).toBeInTheDocument()

    const addBtns = screen.getAllByRole("button", {name: "Add +"})
    // console.log(addBtns.length)
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart - (1 Items)")).toBeInTheDocument()

    fireEvent.click(addBtns[1])

    expect(screen.getByText("Cart - (2 Items)")).toBeInTheDocument()

    expect(screen.getAllByTestId("foodItems").length).toBe(23)

    fireEvent.click(screen.getByRole('button', {name: "Clear Cart"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(21)

    expect(screen.getByText("Your Cart is Empty, Please add items!!")).toBeInTheDocument()



})