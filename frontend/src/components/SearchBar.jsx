import React from "react";
import { useState } from "react";

function SearchBar({ onSubmit, onRefresh }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    return onSubmit(search);
  };

  return (
    <div className="flex">
      <form onSubmit={handleOnSubmit}>
        <input
          className="border border-gray-500 rounded-md px-2 py-1"
          type="text"
          placeholder="Search by Name"
          value={search}
          onChange={handleInputChange}
        />
      </form>
      <button
        className="pl-2"
        onClick={() => {
          onRefresh();
          setSearch("");
        }}
      >
        Refresh
      </button>
    </div>
  );
}

export default SearchBar;
