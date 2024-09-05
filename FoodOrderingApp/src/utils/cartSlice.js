import { createSlice } from "@reduxjs/toolkit"

//creating the slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] 
    },
    reducers: {
        addItem: (state, action) =>{
            //mutating the state here (modifying the state)
            state.items.push(action.payload)
        },
        removeItem: (state) =>{
            state.items.pop()
        },
        clearCart: (state) =>{
            state.items.length = 0 //make items as empty array => state=[]
        }
    }
})


//export the actions
export const { addItem, removeItem, clearCart } = cartSlice.actions


//we need to export the reducer like this
export default cartSlice.reducer