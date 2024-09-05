import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState:{
        messages: [],
    },
    reducers:{
        addMessaage: (state, action)=>{
            if(state.messages.length)
                state.messages.splice(LIVE_CHAT_COUNT, 1)

            state.messages.push(action.payload)
        }
    }
})

export const { addMessaage } = chatSlice.actions
export default chatSlice.reducer