//READY TO GO
import React from "react";
import Requests from "./Requests";
import Rows from "./components/Rows.js";
import AppBanner from "./components/AppBanner";

import { GlobalStyles } from "./globalStyle";

// styling through styled-components

function App() {
  return (
    <div>
      <GlobalStyles />

      <AppBanner />

      <Rows
        //This is row title name
        title="Trending Now"
        //getting fetch url from Requests object
        fetchingUrl={Requests.fetchTrending}
        //providing a unique key because Key {key='TN'} helps to React identify which items have changed, are added, or are removed.
        key="TN"
      />
      <Rows title="Top Rated" fetchingUrl={Requests.fetchTopRated} key="TR" />
      <Rows
        title="Upcoming Movies"
        fetchingUrl={Requests.fetchUpcoming}
        key="UM"
      />
      <Rows title="Tv Shows" fetchingUrl={Requests.fetchTvShows} key="TS" />
      <Rows
        title="Science Fiction"
        fetchingUrl={Requests.fetchScienceFiction}
        key="SF"
      />
      <Rows title="Animation" fetchingUrl={Requests.fetchAnimation} key="AN" />
      <Rows title="Action" fetchingUrl={Requests.fetchAction} key="ACT" />
      <Rows title="Mystery" fetchingUrl={Requests.fetchMystery} key="MYS" />
      <Rows title="Horror" fetchingUrl={Requests.fetchHorror} key="HOR" />
      <Rows title="Romantic" fetchingUrl={Requests.fetchRomantic} key="ROM" />
      <Rows title="Comedy" fetchingUrl={Requests.fetchComedy} key="CMDY" />
      <Rows title="Family" fetchingUrl={Requests.fetchFamily} key="FMLY" />
      <Rows title="Crime" fetchingUrl={Requests.fetchCrime} key="CR" />
      <Rows title="Thriller" fetchingUrl={Requests.fetchThriller} key="THR" />
      <Rows
        title="Documentary"
        fetchingUrl={Requests.fetchDocumentary}
        key="DC"
      />
    </div>
  );
}

export default App;
