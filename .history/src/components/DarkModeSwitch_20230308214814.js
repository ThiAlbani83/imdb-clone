"use client"

import React from 'react'
import {MdLightMode} from 'react-icons/md'
import {BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
    /* const {} */

  return (
    <div>
        <MdLightMode />
        <BsFillMoonFill />
    </div>
  )
}
