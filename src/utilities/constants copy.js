export const IMG_CDN_PATH = "https://image.tmdb.org/t/p/w300/";
export const NO_IMG_CDN_PATH =
  "https://dummyimage.com/500/ddd/000&text=NetFlix.com";

export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const SUPPORT_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;
