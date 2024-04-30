import { useSelector } from "react-redux";
import lang from "../utilities/languageConstants";

const SearchBar = () => {
  const langKey = useSelector((store) => store.lang.selectLang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 bg-black p-8">
        <input
          type="text"
          className="col-span-9 p-3"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button className="bg-red col-span-3 p-3 bg-red-800" type="submit">
          {lang[langKey].searchBtnText}
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
