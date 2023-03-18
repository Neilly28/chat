import React from "react";

const Search = () => {
  return (
    <div>
      <div className="mb-4 text-white">
        <input
          className="bg-transparent outline-0"
          type="text"
          placeholder="Find a user"
        />
      </div>
      <div className="flex items-center gap-2 p-4 hover:bg-violet-800 cursor-pointer">
        <img
          className="bg-slate-400 h-8 w-8 rounded-full object-cover"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <div>
          <span className="text-white">Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
