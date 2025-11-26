import React, { useState } from "react";

const SearchItem = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchItem.trim()) return;
    onSearch(searchItem);
    setSearchItem("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-black flex flex-col gap-4 bg-white p-6 rounded-xl shadow-xl w-80
                 transition-all duration-300 hover:shadow-2xl"
    >
      <input
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        placeholder="Search By Name..."
        className="p-3 rounded-lg border border-gray-300 outline-none 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
      />

      <button
        className="bg-blue-600 text-white py-3 rounded-lg font-semibold 
                   hover:bg-blue-700 transition active:scale-95 shadow-md"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchItem;
