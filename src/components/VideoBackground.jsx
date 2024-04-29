import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const VideoTrailerKey = useSelector((store) => store.movies?.getVideoKey);
  // use custom hook
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          VideoTrailerKey?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="allowFullScreen"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
