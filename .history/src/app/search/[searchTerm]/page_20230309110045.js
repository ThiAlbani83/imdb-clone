import React from 'react'

export default async function searchPage({params}) {

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm`)

  return (
    <div>page</div>
  )
}