import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../Axios";
import Requests from "../Requests";

const Banner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  background-position: center center;
`;

export default function AppBanner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.fetchUpcoming);
      setBanner(
        request.data.results[
          Math.round(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(banner);
  const TMDB_ImageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <Banner src={`${TMDB_ImageUrl}${banner?.backdrop_path}`} alt="" />
    </div>
  );
}
