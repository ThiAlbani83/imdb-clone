import React from "react";

const API_KEY = process.env.API_KEY;

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-br`
  );
  return res.json();
}

export default async function MoviePage({ params }) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  console.log(movie.id);

  return (
    <div className="w-full">
        
    </div>
  );
}
