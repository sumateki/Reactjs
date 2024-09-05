import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Conatct Us Page Test Cases", ()=>{

    //runs before all test cases
    // beforeAll(()=>{
    //     console.log("Before All")
    // })

    // //runs before each test cases --> helpful for cleanUp tasks
    // beforeEach(()=>{
    //     console.log("Before Each")
    // })

    // //runs after all test cases
    // afterAll(()=>{
    //     console.log("After All")
    // })

    // //runs aftr each testcase
    // afterEach(()=>{
    //     console.log("After Each")
    // })


    test("Should load Contact US component", () => {

        render(<Contact />) //renddered on to jsdom
    
        /*we will get this inside screen
          gives all the heading components inside the contact page
        */
       //quering
        const heading = screen.getByRole("heading")
        
        //Assertion
        expect(heading).toBeInTheDocument()
    })
    
    //one way of finding button
    test("Should load button inside Contact US component", () => {
        render(<Contact />) //renddered on to jsdom
        const button = screen.getByRole("button")
        //Assertion
        expect(button).toBeInTheDocument()
    })
    
    //2nd way
    test("shoud load button", () =>{
        render(<Contact/>)
        const button = screen.getByText("Submit")
        //Assertion
        expect(button).toBeInTheDocument()
    })
    
    test("Should load input name inside cocntact component", ()=>{
        render(<Contact/>)
        const inputName = screen.getByPlaceholderText("Name")
        expect(inputName).toBeInTheDocument()
    })
    
    //also use "it" instead "test" both are same
    it("should load 2 input boxes on the cocntact component", ()=>{
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox")
        // console.log(inputBoxes.length)
        // expect(inputBoxes.length).not.toBe(21)
        expect(inputBoxes.length).toBe(2)
    
    })

})








