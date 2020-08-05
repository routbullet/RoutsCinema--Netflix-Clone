import axios from "axios";

const base = axios.create({
  baseURL: "https://api.themoviedb.org/3", //base or starting url of TMDb
});

export default base;
