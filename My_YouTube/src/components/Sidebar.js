import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

    if(!isMenuOpen) return null  //early return pattern
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
            <li><Link>Home</Link></li>
            <li>Shorts</li>
            <li>videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>

        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>
    </div>
  )
}

export default Sidebar