import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSignUpForm = () => {
    setIsSignForm(!isSignInForm);
    setErrors({ fullName: "", email: "", password: "" });
  };

  const handleButtonClick = () => {
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
    };

    const fullNameVal = fullName.current?.value.trim() || "";
    const emailVal = email.current?.value.trim();
    const passwordVal = password.current?.value.trim();

    const validationMsg = checkValidData(fullNameVal, emailVal, passwordVal);

    if (validationMsg.fullName) newErrors.fullName = validationMsg.fullName;
    if (validationMsg.email) newErrors.email = validationMsg.email;
    if (validationMsg.password) newErrors.password = validationMsg.password;

    setErrors(newErrors);
    if (errors.fullName || errors.email || errors.password) {
      return;
    }
    // Sign in and signUp logic

    if (!isSignInForm) {
      // Sign up
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10 w-full h-full overflow-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"
          alt="background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" opacity-80 rounded-lg bg-black bg-opacity-80 p-12 my-36 mx-auto left-0 right-0 w-11/12 max-w-md text-white absolute shadow-xl backdrop-blur-sm"
      >
        <h1 className="font-bold text-3xl my-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <>
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 w-full bg-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}

        <button
          className=" cursor-pointer p-3 mt-6 bg-red-700 hover:bg-red-600 transition duration-300 w-full rounded-md font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="cursor-pointer mt-6 text-center text-sm text-gray-300 hover:underline"
          onClick={handleSignUpForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already have an account? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
