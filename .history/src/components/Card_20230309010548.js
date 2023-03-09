import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div
      className="cursor-pointer hover:shadow-slate-400 shadow-md border border-slate-400 m-2 sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg 
    sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="image is not available"
          className="rounded-t-lg sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <p className="line-clamp-2 text-base">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p>
            {result.release_date || result.first_air_date}
            <FiThumbsUp /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
