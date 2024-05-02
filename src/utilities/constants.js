export const IMG_CDN_PATH = "https://image.tmdb.org/t/p/w300/";
export const NO_IMG_CDN_PATH =
  "https://dummyimage.com/500/ddd/000&text=NetFlix.com";

//TMDB MOVIE API KEY
export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWI2NTVjNjAzZjkyMGM4MmVkNTllM2EwYWU2ZTBmNyIsInN1YiI6IjY2MmI3Yjg1NTAxY2YyMDExZmIzOTQ4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3gT9pMQ10Zpok3sDV9jLKrCuOv4GWlMzUXK2Jjq2Lus",
  },
};

//OPEN AI API KEY
export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;

//LANGUAGE SELECT OPTIONS
export const SUPPORT_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
