import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessaage } from '../utils/chatSlice'
import { generateRandomNames, makeRandomMessage } from '../utils/helper'

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch()

    const chatMessages = useSelector((store) => store.chat.messages)
    useEffect(()=>{
        const i = setInterval(()=>{
            //API polling
            // console.log("API polling started")
            dispatch(addMessaage({
                name: generateRandomNames(),
                message: makeRandomMessage(20) + "🪸",
            }))
        }, 2000)

        return() => clearInterval(i)
    },[])
  return (
    <>
        <div className='ml-2 w-full h-[350px] p-2 border border-black bg-slate-100 rounded-t-lg overflow-y-scroll text-sm flex flex-col-reverse'>
            <div>
                {chatMessages.map((c, index)=>
                    <ChatMessage 
                        key={index}
                        name={c.name}
                        message={c.message}   
                    />
                )} 
            </div>  
        </div>
        <form 
            className='w-full p-2 ml-2 border border-black rounded-b-lg'
            onSubmit={(e)=>{
                e.preventDefault()
                console.log("ON FORM Submit", liveMessage)
                dispatch(addMessaage({
                    name: "Suma Teki",
                    message: liveMessage
                }))
                setLiveMessage("")
            }}
        >
            <input 
                className='w-72 p-2 ' 
                type='text'
                value={liveMessage} 
                onChange={(e)=> setLiveMessage(e.target.value)}
            />
            <button className='px-2 mx-4 bg-green-100'>Send</button>
        </form>
    </>
  )
}

export default LiveChat