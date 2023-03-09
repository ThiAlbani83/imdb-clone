import React from "react";

const API_KEY = process.env.API_KEY;

export default async function searchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=pt-BR&include_adult=true`
  );

    if(!res.ok){
        throw new Error("Error fetching data")
    }

    const data = await res.json()
    const results = data.results

  return <div>page</div>;
}
