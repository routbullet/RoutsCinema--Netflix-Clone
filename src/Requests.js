const API__KEY = "b9605fd8dc74acac2947e1ed0e2aefb6";

const Requests = {
  fetchTrending: `/trending/all/day?api_key=${API__KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API__KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=b9605fd8dc74acac2947e1ed0e2aefb6&language=en-US`,
  fetchTvShows: `/discover/tv?api_key=${API__KEY}&language=en-US&with_networks=213`,
  fetchScienceFiction: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=878`,
  fetchAnimation: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=16`,
  fetchAction: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=28`,
  fetchMystery: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=9648`,
  fetchHorror: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=27`,
  fetchRomantic: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=10749`,
  fetchComedy: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=35`,
  fetchFamily: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=10751`,
  fetchCrime: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=80`,
  fetchThriller: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=53`,
  fetchDocumentary: `/discover/movie?api_key=${API__KEY}&language=en-US&with_genres=99`,
};
export default Requests;
