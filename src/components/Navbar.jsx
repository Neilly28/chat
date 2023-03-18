import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-slate-50">
      <span className="font-bold">Neil Chat</span>
      <div className="flex justify-center items-center gap-2">
        <img
          className="bg-slate-400 h-8 w-8 rounded-full object-cover"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <span>Neil</span>
        <button className="bg-slate-400 text-xs p-1 rounded-lg">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
