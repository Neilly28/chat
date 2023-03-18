import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="max-w-sm flex flex-col mx-auto justify-center items-center shadow-lg rounded-lg px-12 py-6 mt-12 bg-white text-slate-600">
      <span className="font-bold text-2xl">Neil Chat</span>
      <span>Sign In</span>
      <form className="flex flex-col w-full mt-4" action="">
        <input className="border-b p-4 mb-4" type="email" placeholder="email" />
        <input
          className="border-b p-4 mb-4"
          type="password"
          placeholder="password"
        />

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-lg shadow-lg mb-4">
          Sign Up
        </button>
      </form>
      <p>Do you have an account? Register</p>
    </div>
  );
};

export default Login;
