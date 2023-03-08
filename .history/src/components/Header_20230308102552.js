import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillCircleInfoFill} from 'react-icons/bs'

export default function Header() {
  return (
    <div>
        <div>
            <MenuItem 
            title="HOME"
            address="/"
            Icon={AiFillHome} /> 
            <MenuItem 
            title="ABOUT"
            address="/about"
            Icon={BsFillCircleInfoFill} />
        </div>

        <div></div>
    </div>
  )
}
