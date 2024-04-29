import logo from "../img/Netflix-Logo.wine.svg";

const Header = () => {
  return (
    <>
      <div className="pt-5 absolute left-[30%] md:left-20 top-8 ">
        <div className="w-80 mx-auto items-center">
          <img src={logo} alt="" className="w-40 " />
        </div>
      </div>
    </>
  );
};
export default Header;
