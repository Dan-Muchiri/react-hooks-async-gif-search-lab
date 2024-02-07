import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  
  const handleSearch = async (query) => {
    const apiKey = "lMvnu3z7X8jy6Qs3RuxEsDkq0coIRO3f";
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      const firstThreeGifs = data.data.slice(0, 3); 
      setGifs(firstThreeGifs);
    } catch (error) {
      console.error("Error fetching gifs: ", error);
    }
  };
  
  return (
    <div>
      <GifSearch onSubmit={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
