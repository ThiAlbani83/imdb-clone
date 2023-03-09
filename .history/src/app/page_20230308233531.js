

const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {

  const genre = searchParams.genre || "fetchTrending"
  const res = await fetch(`https://api.themoviedb.org/3/movie/${genre}?api_key=${API_KEY}&language=en-US&page=1`)

  return (
    <main>
      <h1>Welcome Home</h1>
    </main>
  )
}
