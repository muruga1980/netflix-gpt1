import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);

  const { movieNames, movieResults } = gpt;
  // if movie name not available in  the store show the error results
  if (!movieNames) return null;

  return (
    <div className="container mt-[2%] p-10 bg-black  h-full w-full   text-white">
      {movieNames.length > 0 &&
        movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            postermovie={movieResults[index]}
          />
        ))}
    </div>
  );
};
export default GptMovieSuggestions;
