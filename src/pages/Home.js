import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="max-w-4xl flex mx-auto justify-center items-center shadow-lg rounded-lg mt-12  bg-violet-900  text-slate-600">
      <div className="w-1/2 h-96 p-4">
        <Sidebar />
      </div>
      <div className="w-full bg-blue-500 h-96">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
