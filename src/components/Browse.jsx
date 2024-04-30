import Header from "./Header";
import UseNowPlayingMovies from "../customHooks/UseNowPlayingMovies";

import MainContainer from "./MainContainer";
import GptSearch from "./GptSearch";
import SecondaryContainer from "./SecondaryContainer";
import UsePopularMovies from "../customHooks/UsePopularMovies ";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPT = useSelector((store) => store.gpt.searchBarshow);

  //console.log(showGPT);
  UseNowPlayingMovies();
  UsePopularMovies();

  return (
    /*
    Header
    Maincontainer
        -video title and description
      - videobackground    
    Secondary container                   
      - movile list * n
      - card *n
    */
    <>
      <Header />

      <div className="bg-hero-pattern bg-cover h-screen w-full ">
        <div className="bg-black bg-opacity-60 h-full w-full   text-white">
          {showGPT ? (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          ) : (
            <GptSearch />
          )}
        </div>
      </div>
    </>
  );
};
export default Browse;
