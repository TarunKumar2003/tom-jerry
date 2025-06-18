import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const handleSignUpForm = () => {
    setIsSignForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"
          alt="logo"
        />
      </div>
      <form className=" rounded-lg opacity-90 absolute bg-black p-12 my-36 mx-auto left-0 right-0 w-3/12 text-white">
        <h1 className="font-bold text-3xl my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="Full Name"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-3 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer my-2" onClick={handleSignUpForm}>
          {isSignInForm
            ? "New to Netflix? Signup Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
