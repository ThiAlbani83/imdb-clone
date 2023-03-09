import React from "react";

const API_KEY = process.env.API_KEY;

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  console.log(params.id)
  const movie = await getMovie(movieId);

  console.log(movie.id);

  return (
    <div>
      <h1>{movie.title || movie.name}</h1>
    </div>
  );
}
