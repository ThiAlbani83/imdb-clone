import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-5xl px-5 py-3 mx-auto'>
        <div className='flex gap-10'>
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
            <h2 className='text-2xl flex items-end gap-2'>
              <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg'>
                IMDb
                </span>
                <span className='text-xl hidden sm:inline'>
                  Clone
                  </span>
                  </h2>
          </Link>
        </div>
    </div>
  )
}
