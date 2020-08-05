import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import axios from "../Axios";

const Main = styled.div`
  margin: 0;
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
  max-height: 150px;
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
      <h1>{title}</h1>

      <PosterContainer>
        {movies__list.map((movie) => (
          <PosterImage
            whileHover={{
              scale: 1.2,
            }}
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