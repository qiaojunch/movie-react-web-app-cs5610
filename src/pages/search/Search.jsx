import React from 'react';
import './search.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MovieList from '../../components/movieList/MovieList';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import Navbar from '../../components/navbar/Navbar';


export default function Search(searchTerm) {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch movies data from omdb api
    dispatch(fetchAsyncMovies(searchTerm));
    dispatch(fetchAsyncShows(searchTerm));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="search-container">
        <MovieList />
      </div>
    </div>
  )
}
