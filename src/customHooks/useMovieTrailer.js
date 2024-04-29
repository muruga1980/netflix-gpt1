import { useEffect } from "react";
import { API_options } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { getVideoKeyAction } from "../utilities/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // console.log(movieId);
  const bgvideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_options
    );
    const json = await data.json();
    //console.log(json.results);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailerData = filterData.length ? filterData[0] : json.results[0];

    dispatch(getVideoKeyAction(trailerData));
  };

  useEffect(() => {
    bgvideos();
  }, []);
};
export default useMovieTrailer;
