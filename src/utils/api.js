import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
//const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTFmNWI5YjY1OWM1MDExOGM0NDg4YTBkZDAzNWVjZSIsInN1YiI6IjY0MmQ0ODQzNTgzNjFiMDBkMzM4ZTVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lramTlxnVOay_JY4djKCix-48VnOWYPRNsPl3A8b-bM";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};