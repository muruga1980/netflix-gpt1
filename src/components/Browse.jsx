import Header from "./Header";
import UseNowPlayingMovies from "../customHooks/UseNowPlayingMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UsePopularMovies from "../customHooks/UsePopularMovies ";

const Browse = () => {
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
          <MainContainer />
          <SecondaryContainer />
        </div>
      </div>
    </>
  );
};
export default Browse;
