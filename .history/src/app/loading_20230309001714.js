"use client" 

import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center items-center'>
        <img className='h-96' src="spinner.svg" alt='loading...'/>
    </div>
  )
}