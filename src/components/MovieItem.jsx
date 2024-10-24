
import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <li>
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
    </li>
  );
};

export default MovieItem;