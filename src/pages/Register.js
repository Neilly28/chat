import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="max-w-sm flex flex-col mx-auto justify-center items-center shadow-lg rounded-lg px-12 py-6 mt-12 bg-white text-slate-600">
      <span className="font-bold text-2xl">Neil Chat</span>
      <span>Register</span>
      <form className="flex flex-col w-full mt-4" action="">
        <input
          className="border-b p-4 mb-4"
          type="text"
          placeholder="display name"
        />
        <input className="border-b p-4 mb-4" type="email" placeholder="email" />
        <input
          className="border-b p-4 mb-4"
          type="password"
          placeholder="password"
        />
        <label
          className="flex items-center gap-4 mb-4 cursor-pointer"
          htmlFor="file"
        >
          <img className="w-8" src={Add} alt="" />
          <span>Add an avatar</span>
        </label>
        <input className="border-b p-4 mb-4 hidden" type="file" id="file" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-lg shadow-lg mb-4">
          Sign Up
        </button>
      </form>
      <p>Do you have an account? Login</p>
    </div>
  );
};

export default Register;
