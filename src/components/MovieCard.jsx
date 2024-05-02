import { IMG_CDN_PATH } from "../utilities/constants";
import { NO_IMG_CDN_PATH } from "../utilities/constants";

const MovieCard = ({ posterpath }) => {
  //console.log(posterpath);

  return (
    <div className="w-48 pr-5">
      <div className="rounded">
        {posterpath ? (
          <>
            <img
              src={IMG_CDN_PATH + posterpath}
              alt=""
              className="rounded-lg"
            />{" "}
          </>
        ) : (
          <>
            <img
              src={NO_IMG_CDN_PATH}
              alt=""
              className="rounded-lg h-[250px]"
            />
          </>
        )}
      </div>
    </div>
  );
};
export default MovieCard;
