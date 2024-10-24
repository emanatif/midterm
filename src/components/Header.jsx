import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Movie App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/movies">Movies</Link>
      </nav>
    </header>
  );
};

export default Header;