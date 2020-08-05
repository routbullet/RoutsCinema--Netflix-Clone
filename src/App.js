//READY TO GO
import React from "react";
import Requests from "./Requests";
import Rows from "./components/Rows.js";
function App() {
  return (
    <div>
      <h1>BRDB (Netflix-Clone)</h1>

      <Rows
        title="Trending Now"
        fetchingUrl={Requests.fetchTrending}
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
