import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
const VideoInfo = ({ title, info }) => {
  return (
    <div className="pt-44 ps-20 absolute">
      <h2 className="font-bold text-5xl">{title}</h2>
      <div className="text-white w-1/3 py-8">{info}</div>
      <div className="flex items-center">
        <button
          type="button"
          className=" bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center me-4"
        >
          <FaPlay className="mx-2" /> Play
        </button>
        <button
          type="button"
          className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center "
        >
          <ImInfo className="mx-2" /> More Info
        </button>
      </div>
    </div>
  );
};
export default VideoInfo;
