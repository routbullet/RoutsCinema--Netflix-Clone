import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../Axios";
import Requests from "../Requests";

const BannerTitle = styled.h1`
  margin-top: 9rem;
  margin-left: 7.2rem;
  font-size: 3rem;

  text-shadow: 5px 5px 6px black;
  position: absolute;
  z-index: 2;
`;
const BannerMovieOverview = styled.h2`
  margin-top: 14rem;
  margin-left: 7.2rem;
  width: 30%;
  height: 10.51rem;
  // overflow: hidden;
  font-family: "Special Elite", cursive;
  font-size: 1.3rem;
  color: white;

  text-shadow: 6px 6px 6px black;
  position: absolute;
  z-index: 2;
`;
const PlayButton = styled.button`
  padding: 0.8rem;
  margin-top: 22.3rem;
  margin-left: 7.2rem;
  border-radius: 0.6rem;
  background: transparent;
  position: absolute;
  color: white;
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  box-shadow: 4px 1px 4px black;
  z-index: 2;
`;
const WishListButton = styled.button`
  padding: 0.8rem;
  border-radius: 0.6rem;
  margin-top: 22.3rem;
  font-family: "Libre Baskerville", serif;
  color: white;
  font-weight: 700;
  background: transparent;
  box-shadow: 4px 0px 4px black;

  margin-left: 11.9rem;
  position: absolute;
  z-index: 2;
`;

const Banner = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: fill;
  background-position: center center;
  opacity: 0.7;
`;

const BannerBottomGradient = styled.div`
  height: 3.8rem;
  position: absolute;
  width: 100%;

  margin-top: -2.8rem;
  z-index: 2;

  background-image: linear-gradient(180deg, transparent, #0d0c1d, #0d0c1d);
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

  const ReadLess = (overview_stringy, number_of_character) => {
    return overview_stringy?.length > number_of_character
      ? overview_stringy.substr(0, number_of_character - 1) + "..."
      : overview_stringy;
  };
  const TMDB_ImageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <BannerTitle key={banner.title || banner.id}>
        {banner?.original_title || banner?.title}
      </BannerTitle>
      <BannerMovieOverview>
        {ReadLess(banner?.overview, 160)}
      </BannerMovieOverview>
      <PlayButton>Play</PlayButton>
      <WishListButton>Wish List</WishListButton>

      <Banner
        key={banner.id}
        src={`${TMDB_ImageUrl}${banner?.backdrop_path || banner?.poster_path}`}
        alt=""
      />

      <BannerBottomGradient />
    </div>
  );
}
