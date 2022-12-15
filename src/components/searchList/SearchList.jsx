import React from 'react';
import Slider from 'react-slick';
import { settings } from '../../common/settings';   // make slider screen-dynamic
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/omdb/omdb-reducer';
import SearchItem from '../searchItem/SearchItem';
import "./searchList.scss";

export default function SearchList() {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies = "";   // create a variable to hold movie response data 
    let renderShows = "";

    renderMovies = 
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
                <SearchItem key={index} data={movie} />
            ))
        ) : (
            <div className="movies-error">
                {movies.Error}
            </div>
        );
    
    renderShows = 
        shows.Response === "True" ? (
            shows.Search.map((show, index) => (
                <SearchItem key={index} data={show} />
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



