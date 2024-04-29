import VideoBackground from "./VideoBackground";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieList = useSelector((store) => store.movies?.nowPlayingmovies);
  //Cannot read properties of null (reading '0')
  // first time loading in store initialstate is null
  // so you add if statement movie list === null then return

  if (movieList === null) return;
  //or indusry standard
  if (!movieList) return;

  // get first movie info in array and show case video and title
  const mainMovie = movieList[2];

  // destructure  array so may
  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <VideoInfo title={original_title} info={overview} />
      <VideoBackground movieId={id} />
    </>
  );
};
export default MainContainer;
