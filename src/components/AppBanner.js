import React, { useState, useEffect } from "react";
import axios from "../Axios";
import Requests from "../Requests";

export default function AppBanner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.fetchTvShows);
      setBanner(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  console.log(banner);
  const TMDB_ImageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      {banner.map((overdrop) => (
        <img
          src={`${TMDB_ImageUrl}${overdrop.poster_path}`}
          key={overdrop.id}
          alt=""
        />
      ))}
    </div>
  );
}
