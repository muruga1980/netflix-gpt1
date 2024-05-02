import { useDispatch, useSelector } from "react-redux";
import lang from "../utilities/languageConstants";
import { useRef } from "react";
import openai from "../utilities/openai";
import { API_options } from "../utilities/constants";
import { addGptMovieResults } from "../utilities/gptSlice";
//import MovieList from "./MovieList";

const SearchBar = () => {
  const langKey = useSelector((store) => store.lang.selectLang);
  const dispatch = useDispatch();
  const searchQuery = useRef();

  // first get the movie result in open ai
  // second open ai result to search the tmbd api
  // third list out the all results in movie card formate

  // second OpenAI result to search in the TMDB APi
  const getMovieResultInTMDB_api = async (gptMovies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        gptMovies +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );

    const json = await data.json();
    return json.results;
  };

  // First get the results in GPT api
  const grapMovieResults = async (e) => {
    e.preventDefault();
    //console.log(searchValue.current.value);

    const GPT_Query =
      "Act as a movie recommendations system and suggest some movies for the query:" +
      searchQuery.current.value +
      "only name of 5 movies with comma separator, like the example given ahead. Example result: Soorarai Pottru, kaithi, anbe sivam, anniyan,roja";

    const GPT_Results = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPT_Query }],
      model: "gpt-3.5-turbo",
    });
    if (!GPT_Results.choices) {
      return "PAGE NOT FOUND";
    }
    //console.log(GPT_Results.choices?.[0]?.message?.content);
    const gptMovies = GPT_Results.choices?.[0]?.message?.content.split(",");
    //gptMovies = ['Master', ' Kaithi', ' Asuran', ' Bigil', ' Darbar']
    //console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) =>
      getMovieResultInTMDB_api(movie)
    );

    const tmdbSearchResults = await Promise.all(promiseArray);
    //console.log(tmdbSearchResults);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovies,
        movieResults: tmdbSearchResults,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 bg-black p-8"
        onSubmit={grapMovieResults}
      >
        <input
          ref={searchQuery}
          type="text"
          className="col-span-9 p-3 text-black"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button className="bg-red col-span-3 p-3 bg-red-800" type="submit">
          {lang[langKey].searchBtnText}
        </button>
      </form>

      {/* <MovieList title={title} poster={poster_path} /> */}
    </div>
  );
};
export default SearchBar;
