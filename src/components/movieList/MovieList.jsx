import React from 'react';
import Slider from 'react-slick';
import { settings } from '../../common/settings';   // make slider screen-dynamic
import MovieItem from '../movieItem/MovieItem';
import "./movieList.scss";

export default function MovieList(props) {
    const { movies, shows } = props;

  return (
    <div className="movie-wrapper">
        <div className="movie-list">
            <h2>Movies</h2>

            <div className="movie-container">
                <Slider {...settings}>{movies && movies.map( 
                    movie => <MovieItem key={movie._id} data={movie}/>)}</Slider>
            </div>
            
        </div>
        <div className="movie-list">
            <h2>Shows</h2>
            <div className="movie-container">
            <Slider {...settings}>{shows && shows.map( 
                    show => <MovieItem key={show._id} data={show}/>)}</Slider>
            </div>
        </div>
    </div>
  )
}


