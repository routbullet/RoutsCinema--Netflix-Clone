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

  cursor: pointer;
  width: 100%;
  max-height: 170px;
  border-radius: 0.3rem;
  padding-right: 0.4rem;
  // transition: transform 430ms;
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
  console.table(movies__list);
  const TMDB_ImageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <Main>
      <TitleHeadings>{title}</TitleHeadings>

      <PosterContainer>
        {movies__list.map((movie) => (
          <PosterImage
            key={movie.id}
            src={`${TMDB_ImageUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </PosterContainer>

      {/* {movies__list.map((movie) => (
        <img src={movie.poster.path} alt={movie.title} />
      ))} */}
    </Main>
  );
};
export default Rows;
