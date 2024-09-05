import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = () => {
    onSearch(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-100 py-2 px-6 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          aria-label="Search for a city"
          value={inputValue}
          onChange={handleInputChange}
        />
        <TiDeleteOutline
          className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer"
          onClick={handleClearInput}
        />
      </div>
      <div
        className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-200 transition duration-300"
        aria-label="Search"
        onClick={handleSearch}
      >
        <FaSearch />
      </div>
    </div>
  );
};

export default React.memo(SearchBar);
