import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
        <div className='flex gap-5 mx-5 my-3'>
            <MenuItem
            title="HOME"
            address="/"
            Icon={AiFillHome} /> 
            <MenuItem 
            title="ABOUT"
            address="/about"
            Icon={BsFillInfoCircleFill} />
        </div>

        <div>
          <Link href='/'>
            <h2 className='text-2xl'>
              <span className='font-bold bg-amber-500'>
                IMDb
                </span>
                <span>
                  Clone
                  </span>
                  </h2>
          </Link>
        </div>
    </div>
  )
}
