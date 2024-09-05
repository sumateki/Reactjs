import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {

    const [searchParams] = useSearchParams()
    // console.log(searchParams.get("v"))

    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col w-full ml-20 mr-20'>
      <div className='px-5 flex w-full'>
        <div>
          <iframe 
                width="650" 
                height="350" 
                src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                style={{ borderRadius: '13px' }}
            >
          </iframe> 
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <CommentContainer/>
    </div>
  )
}

export default WatchPage