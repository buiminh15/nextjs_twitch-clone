import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function TextSearch({ value, handleSearch, handleClick }) {
  return (
    <div className="hidden max-w-[400px] w-full md:flex px-6 py-2 rounded-full bg-[#6b7280]">
      <input
        type="text"
        value={value}
        onChange={handleSearch}
        className="flex-1 outline-none tracking-wider border-none bg-[#6b7280] min-w-[30%]"
        placeholder="Search"
      />
      <SearchIcon
        className="text-[#f8f8f8] h-5 cursor-pointer 
        hover:text-purple-400 hover-transition"
        onClick={handleClick}
      />
    </div>
  );
}

export default TextSearch;
