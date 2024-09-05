import { fireEvent, render, screen } from "@testing-library/react"
import Body from '../Body'
import MOCK_DATA from '../mocks/mockResListData.json'
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

//fake an api call
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should Search res list for tiffins text input", async()=>{
    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    )

    const cardsBfrSearch = screen.getAllByTestId("resCard")
    expect(cardsBfrSearch.length).toBe(9)

    const searchBtn = screen.getByRole("button", {name: 'Search'})

    const searchInp = screen.getByTestId("searchInput")

    fireEvent.change(searchInp, {target: { value: "tiffins" } })

    fireEvent.click(searchBtn)

    //screen should load 2 res cards
    const cardsAftrSearch = screen.getAllByTestId("resCard")

    expect(cardsAftrSearch.length).toBe(3)
})

it("Should filter toprated res", async()=>{
    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    )

    const cardsBfrFilter = screen.getAllByTestId("resCard")
    expect(cardsBfrFilter.length).toBe(9)

    const topRatedBtn = screen.getByRole("button", {name:  "Top Rated Restaurant"})
    fireEvent.click(topRatedBtn)

    const cardsAftrFilter = screen.getAllByTestId("resCard")
    expect(cardsAftrFilter.length).toBe(1)

})