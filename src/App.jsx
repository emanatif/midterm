import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Footer from './components/Footer';

const API_KEY = '3c7d5b90'; 

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );

      if (response.data.Search) {
        setMovies(response.data.Search); 
      } else {
        setMovies([]); 
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    fetchMovies(query); 
  };

  return (
    <div>
      <Header />
      <SearchBar onSearchChange={handleSearchChange} />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
};

export default App;
