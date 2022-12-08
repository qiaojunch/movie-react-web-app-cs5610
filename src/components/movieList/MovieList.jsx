import React from 'react';
import Slider from 'react-slick';
import { settings } from '../../common/settings';   // make slider screen-dynamic
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieItem from '../movieItem/MovieItem';
import "./movieList.scss";

export default function MovieList() {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies = "";   // create a variable to hold movie response data from omdb api
    let renderShows = "";

    renderMovies = 
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
                <MovieItem key={index} data={movie} />
            ))
        ) : (
            <div className="movies-error">
                {movies.Error}
            </div>
        );
    
    renderShows = 
        shows.Response === "True" ? (
            shows.Search.map((show, index) => (
                <MovieItem key={index} data={show} />
            ))
        ) : (
            <div className="movies-error">
                {shows.Error}
            </div>
        );
  return (
    <div className="movie-wrapper">
        <div className="movie-list">
            <h2>Movies</h2>

            <div className="movie-container">
                <Slider {...settings}>{renderMovies}</Slider>
            </div>
            
        </div>
        <div className="movie-list">
            <h2>Shows</h2>
            <div className="movie-container">
            <Slider {...settings}>{renderShows}</Slider>
            </div>
        </div>
    </div>
  )
}


