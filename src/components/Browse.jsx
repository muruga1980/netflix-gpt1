import Header from "./Header";
import UseNowPlayingMovies from "../customHooks/UseNowPlayingMovies";

const Browse = () => {
  UseNowPlayingMovies();
  return (
    /*
    Header
    Maincontainer
      - videobackground
        -video title and description
    Secondary container
      - movile list * n
      - card *n
    */
    <>
      <Header />

      <div className="bg-hero-pattern bg-cover h-screen w-full ">
        <div className="bg-black bg-opacity-60 h-full w-full flex justify-center items-center">
          sacsa
        </div>
      </div>
    </>
  );
};
export default Browse;
