import { Magnifier } from "@gravity-ui/icons"
import { useState } from "react";


const Search = ({ className, placeholder = "Search...", inputClassName, iconPosition, theme }) => {
    const [search, setSearch] = useState("");
  
    const baseInput =
      "rounded-full h-10 focus:outline-none w-full pl-8 p-2 cursor-pointer";
  
    const themeInput =
      theme === "dark"
        ? "bg-zinc-900 text-white border border-zinc-700 placeholder:text-gray-400 hover:bg-zinc-800"
        : "";
  
    return (
      <form
        onSubmit={(e) => e.preventDefault()}
        className={`hidden sm:flex flex-1 max-w-lg h-10 text-xs sm:text-sm rounded-full ${className ?? ""}`}
      >
        <div className="relative w-full">
          <Magnifier
            className={`absolute ${iconPosition} -translate-y-1/2 size-4 ${
              theme === "dark" ? "text-gray-500" : "text-zinc-400"
            }`}
          />
          <input
            type="text"
            value={search}
            placeholder={placeholder}
            onChange={(e) => setSearch(e.target.value)}
            className={`${baseInput} ${inputClassName ?? themeInput}`}
          />
        </div>
      </form>
    );
  };

export default Search