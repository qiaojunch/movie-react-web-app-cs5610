import React from 'react';
import './myList.scss';

const MyList = (props) => {
  return (
    <div className="my-list">
      {props.movies.map((movie) => (
        <div className="my-list-item" key={movie.id}>
          <img
            src={movie.imageUrl}
            alt={movie.title}
            onClick={() => props.onMovieClick(movie.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default MyList;
