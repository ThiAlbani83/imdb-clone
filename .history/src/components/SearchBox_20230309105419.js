"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter()
    function handleSubmit(e) {
        e.preventDefault();
        if(!search) return
        router.push(`/search/${search}`)
    }


  return (
    <form 
    onSubmit={handleSubmit}
    className="flex max-w-5xl mx-auto justify-between items-center px-5">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-full h-14 rounded-sm placeholder-gray-500 
      outline-none bg-transparent flex-1"
      />
      <button type="submit" className="text-amber-600 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
}