import React from "react";

const Chats = () => {
  return (
    <div>
      <div className="flex items-center gap-2 p-4 hover:bg-violet-800 cursor-pointer">
        <img
          className="bg-slate-400 h-8 w-8 rounded-full object-cover"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <div>
          <span className="text-white text-md font-bold">Jane</span>
          <p className="text-sm text-slate-400">Hello</p>
        </div>
      </div>
      <div className="flex items-center gap-2 p-4 hover:bg-violet-800 cursor-pointer">
        <img
          className="bg-slate-400 h-8 w-8 rounded-full object-cover"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <div>
          <span className="text-white text-md font-bold">Jane</span>
          <p className="text-sm text-slate-400">Hello</p>
        </div>
      </div>
      <div className="flex items-center gap-2 p-4 hover:bg-violet-800 cursor-pointer">
        <img
          className="bg-slate-400 h-8 w-8 rounded-full object-cover"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <div>
          <span className="text-white text-md font-bold">Jane</span>
          <p className="text-sm text-slate-400">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
