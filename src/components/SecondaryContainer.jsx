import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  //console.log(movies);
  // if (!movies) return;
  if (movies === null) return;

  return (
    /*  movile list- popular
       movile list - latest
       movielist - harour movie
    */
    <div className="p-10 bg-black -mt-56 relative z-20 pt-0">
      <MovieList
        title="Now Playing Movies"
        postermovie={movies?.nowPlayingmovies}
      />
      <MovieList title="Recent Movies" postermovie={movies?.nowPlayingmovies} />

      <MovieList title="Popular Movies" postermovie={movies?.popularMovies} />
      <MovieList
        title="Trending Movies"
        postermovie={movies?.nowPlayingmovies}
      />
    </div>
  );
};
export default SecondaryContainer;
