import { API_options } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilities/movieSlice";
import { useEffect } from "react";

const UseNowPlayingMovies = () => {
  // movie render method custom hook
  const dispatch = useDispatch();

  // fetch movies data from TMDB api and upfate the store
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_options
    );
    const json = await data.json();

    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default UseNowPlayingMovies;
