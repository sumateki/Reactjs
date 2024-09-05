import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { json, useNavigate } from 'react-router-dom'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const searchCache = useSelector((store) => store.search)
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    useEffect(() =>{
        //make an api call after every key press
        // but if the diff b/w 2 api calls is < 200ms
        // deccline the api call
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }
            else{
                getSearchSuggestions()
            }   
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    },[searchQuery])

    /**
     * 
     * key - i
     * - render the component
     * - useEffect()
     * - start timer => make an api call after 200 ms
     * 
     * key -ip
     * - destroy the component(useeffect return method)
     * - re-rendr thec component
     * - useeffect()
     * - start timer => make api call after 200ms    
     * 
     * setTimeout(200) - make api call
     */

    const getSearchSuggestions = async () =>{
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestions(json[1])

        //update cache
        dispatch(
            cacheResults({
                [searchQuery] : json[1]
            })
        )
    }

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }

    // const handleSuggestionClick = (suggestion) =>{
    //     navigate(`/search/${suggestion.id.videoId}`)
    //     setShowSuggestions(false)
    // }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
        <img 
            onClick={()=>toggleMenuHandler()}
            src='https://cdn-icons-png.flaticon.com/512/8182/8182885.png'
            alt='hamburger icon' 
            className='h-8 cursor-pointer'
        />
        <a href='/'>
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s'
                alt='logo'
                className='h-8 ml-2'
            />
        </a>
        </div>
        <div className='col-span-10 px-10 '>
            <div className='flex'>
                <input 
                    type='text' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    onClick={()=> getSearchSuggestions(true)}
                    className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full '
                />
                <button className='border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100'>
                    <img 
                        src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png'
                        alt='search_icon'
                        className='h-6'
                    />
                </button>
            </div>
            {showSuggestions && (
                <div className='fixed bg-white py-2 px-5 w-[25rem] shadow-lg rounded-lg border border-gray-100'>
                    <ul>
                        {suggestions.map(s =>
                            <li 
                                key={s} 
                                // onClick={() => handleSuggestionClick(s)}
                                className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}

                            </li>
                        )}                               
                    </ul>
                </div>
            )}
        </div>
        <div className='col-span-1'>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'
                alt='user_icon'
                className='h-8'
            />
        </div>
    </div>  
  )
}

export default Head