import React from "react";
import { useEffect, useState } from "react";
import { fetchApi } from "../services/fetchData";
import DataCard from "./DataCard";

const Homepage = ({ currentUser }) => {
  const [topRapAlbums, setTopRapAlbums] = useState([]);
  const [topPopAlbums, setTopPopAlbums] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetchApi("rap").then((res) => setTopRapAlbums(res));
      await fetchApi("pop").then((res) => setTopPopAlbums(res));
    }
    fetchData();
  }, []);

  if (!topRapAlbums?.data?.albums.album.length) return null;
  if (!topPopAlbums?.data?.albums.album.length) return null;

  return (
    <div>
      <div className="greeting">
        <h2>Welcome, {currentUser.user.username}</h2>
      </div>
      <div className="rap-heading">
        <h3>Top rap albums today</h3>
      </div>
      <div className="listFilesRap">
        {topRapAlbums.data.albums.album.map((album, index) => (
          <DataCard
            className="card"
            image={album.image[3]["#text"]}
            name={album.name}
            artist={album.artist.name}
            key={index}
          />
        ))}
      </div>
      <div className="pop-heading">
        <h3>Top pop albums today</h3>
      </div>
      <div className="listFilesPop">
        {topPopAlbums.data.albums.album.map((album, index) => (
          <DataCard
            className="card"
            image={album.image[3]["#text"]}
            name={album.name}
            artist={album.artist.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
