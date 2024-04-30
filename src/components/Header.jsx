import logo from "../img/Netflix-Logo.wine.svg";
import { IoSearchOutline, IoArrowBackOutline } from "react-icons/io5";

import SUPPORT_LANG from "../utilities/constants";

import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchAction } from "../utilities/gptSlice";
import { changelanuage } from "../utilities/langSlice";

const Header = () => {
  const searchBarshow = useSelector((store) => store.gpt.searchBarshow);

  const dispatch = useDispatch();
  const showGpt = () => {
    dispatch(toggleGptSearchAction());
  };

  const changeLanuage = (e) => {
    dispatch(changelanuage(e.target.value));
  };
  return (
    <>
      <div className="py-10 container top-8 bg-black px-24">
        <div className="flex flex-row text-white justify-between">
          <div className="items-center">
            <img src={logo} alt="" className="w-40 " />
          </div>

          <div className="flex">
            {!searchBarshow && (
              <select className="text-black m-1 px-2" onChange={changeLanuage}>
                {SUPPORT_LANG.map((list) => {
                  return (
                    <option key={list.identifier} value={list.identifier}>
                      {list.name}
                    </option>
                  );
                })}
              </select>
            )}

            <button
              className="flex items-center hover:bg-red-400 bg-red-800 px-3 m-1"
              onClick={showGpt}
            >
              {" "}
              {searchBarshow ? (
                <span className="flex items-center">
                  <IoSearchOutline className="me-1" /> GPT Search
                </span>
              ) : (
                <span className="flex items-center">
                  <IoArrowBackOutline className="me-1" /> Home page
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
