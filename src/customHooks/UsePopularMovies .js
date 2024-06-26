import { API_options } from "../utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utilities/movieSlice";
import { useEffect } from "react";

const UsePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  // movie render method custom hook
  const dispatch = useDispatch();

  // fetch movies data from TMDB api and upfate the store
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_options
    );
    const json = await data.json();

    //console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default UsePopularMovies;
