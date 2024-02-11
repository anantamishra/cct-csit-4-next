"use client";

import { useEffect, useState } from "react";

export default function JokePage() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function fetchJoke() {
      try {
        const url = "https://api.chucknorris.io/jokes/random";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch joke");
        }
        const jokeData = await response.json();
        console.log(jokeData);
        setJoke(jokeData.value);
      } catch (error) {
        console.error("Error fetching joke:", error);
      }
    }

    fetchJoke();
  }, []);

  return <div>{joke}</div>;
}
