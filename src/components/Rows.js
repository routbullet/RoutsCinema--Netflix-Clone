import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import axios from "../Axios";

const Main = styled.div`
  margin: 0;
`;

const TitleHeadings = styled.h1`
  display: flex;
  justify-content: center;
  text-shadow: 5px 5px 10px black;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 3.4px;
`;
const PosterContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PosterImage = styled.img`
  object-fit: contain;
  margin-top: -1.3rem;
  cursor: pointer;
  width: 100%;
  max-height: 250px;
  border-radius: 0.3rem;
  padding-right: 0.4rem;
  // transition: transform 430ms;
`;
const Rowtopgradient = styled.div`
  height: 2rem;
  position: absolute;
  width: 100%;

  z-index: 2;
  background-image: linear-gradient(360deg, transparent, #0d0c1d, #0d0c1d);
`;
const Rowbottomgradient = styled.div`
  height: 2rem;
  position: absolute;
  width: 100%;
  margin-top: -1.2rem;
  z-index: 2;
  background-image: linear-gradient(180deg, transparent, #0d0c1d, #0d0c1d);
`;

const Rows = ({ title, fetchingUrl }) => {
  const [movies__list, setMovies__list] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchingUrl);
      setMovies__list(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchingUrl]);
  console.log(movies__list);
  const TMDB_ImageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <Main>
      <TitleHeadings>{title}</TitleHeadings>
      <Rowtopgradient />
      <PosterContainer>
        {movies__list.map((movie) => (
          <PosterImage
            key={movie.id}
            src={`${TMDB_ImageUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </PosterContainer>

      <Rowbottomgradient />
    </Main>
  );
};
export default Rows;
