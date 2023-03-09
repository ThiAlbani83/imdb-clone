"use client"
import { useEffect } from 'react'

export default function error({error, reset}) {

    useEffect(() => {
        console.log(error)
    }, [error])

  return (
    <div>
        <h1>Something went wrong</h1>
    </div>
  )
}
