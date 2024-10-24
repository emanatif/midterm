import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};


export default SearchBar;