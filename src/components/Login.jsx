import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utilities/CheckValidation";
//import { useNavigate } from "react-router-dom";
//import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("show");

  //validation
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // SignIn / SignUp toggle

  const handleChange = () => {
    setIsSignIn(!isSignIn);
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    // perform registration logic here
    const nameMsg = name?.current?.value;
    const emailMsg = email.current.value;
    const passwordMsg = password.current.value;
    const message = checkValidation(nameMsg, emailMsg, passwordMsg);
    setErrorMessage(message);
    //console.log(passwordMsg);

    // reset form fields
    email.current.value = "";
    password.current.value = "";
  };

  // password show hide

  const pass_showHide = () => {
    type === "password" ? setType("text") : setType("password");
    icon === "show" ? setIcon("hide") : setIcon("show");
  };

  return (
    <>
      <Header />
      <div className="bg-hero-pattern bg-cover h-screen w-full ">
        <div className="bg-black bg-opacity-60 h-full w-full flex justify-center items-center">
          <div className="mx-5 bg-black bg-opacity-70 text-white w-full md:w-[35%] rounded-lg">
            <form className="p-6 md:p-16 text-black" onSubmit={FormSubmit}>
              <h4 className=" font-semibold font-poppins  text-2xl md:text-4xl pb-8 text-start text-white">
                {isSignIn ? "Sign In" : "Sign up"}
              </h4>

              {!isSignIn && (
                <div className="mb-5">
                  <input
                    ref={name}
                    type="text"
                    placeholder="Full Name"
                    className="p-3 rounded-sm w-full"
                  />
                </div>
              )}

              <div className="mb-5">
                <input
                  ref={email}
                  type="email"
                  placeholder="Email"
                  className="p-3 rounded-sm w-full"
                />
              </div>

              <div className="mb-5 relative">
                <span
                  onClick={pass_showHide}
                  className="absolute right-3 top-4 text-black cursor-pointer"
                >
                  {icon}
                </span>
                <input
                  ref={password}
                  type={type}
                  placeholder="Password"
                  className="p-3 rounded-sm  w-full"
                />
              </div>
              <p className="text-red-700 mb-5 text-left">{errorMessage}</p>
              <button
                type="submit"
                className="w-full focus:outline-none text-white bg-red-700  focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-lg px-5 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 disabled:bg-red-300"
              >
                {isSignIn ? "Sign In" : " Sign Up now"}
              </button>

              <p className="text-lg pt-5 text-start text-gray-400">
                <span
                  className=" text-white cursor-pointer"
                  onClick={handleChange}
                >
                  {isSignIn
                    ? " New to Netflix ? Sign Up"
                    : " Already have account ? Sign In "}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
