import React from 'react'
import Button from './Button'

const list = [] //build map for buttons

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Live"/>
        <Button name="Television"/>
        <Button name="Music"/>
        <Button name="Drama"/>
        <Button name="Devotional"/>
        <Button name="Telugu Cinema"/>
        <Button name="Chanting"/>
        <Button name="Playlists"/>
        <Button name="Cooking Shows"/>
    </div>
  )
}

export default ButtonList