import { IMG_CDN_PATH } from "../utilities/constants";

const MovieCard = ({ posterpath }) => {
  //console.log(posterpath);
  return (
    <div className="w-48 pr-5">
      <div className="rounded">
        <img src={IMG_CDN_PATH + posterpath} alt="" className="rounded-lg" />
      </div>
    </div>
  );
};
export default MovieCard;
