import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'

export default function Header() {
  return (
    <div>
        <div className='flex gap-5 mx-5'>
            <MenuItem 
            title="HOME"
            address="/"
            Icon={AiFillHome} /> 
            <MenuItem 
            title="ABOUT"
            address="/about"
            Icon={BsFillInfoCircleFill} />
        </div>

        <div></div>
    </div>
  )
}
