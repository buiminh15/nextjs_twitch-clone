import React from "react";
import { SearchIcon, XIcon } from "@heroicons/react/outline";

function TextSearch({ value, handleSearch, handleClick, handleClear }) {
  return (
    <div className="hidden max-w-[400px] md:flex w-full gap-[1px]">
      <div className="flex items-center bg-slate-600 rounded-l-sm w-full overflow-hidden">
        <input
          type="text"
          value={value}
          onChange={handleSearch}
          className="tracking-wider outline-none bg-slate-600 h-full px-3 flex-1"
          placeholder="Search"
        />
        {value && (
          <XIcon className="h-3 cursor-pointer px-2" onClick={handleClear} />
        )}
      </div>

      <button
        disabled={!value}
        onClick={handleClick}
        className={`p-2 bg-slate-700 rounded-r-sm hover:bg-slate-600 hover-transition ${
          value ? "cursor-pointer" : "cursor-not-allowed"
        }`}
      >
        <SearchIcon className="text-[#f8f8f8] h-4" />
      </button>
    </div>
  );
}

export default TextSearch;
