import React from 'react';
import './search.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/omdb/omdb-reducer';
import Navbar from '../../components/navbar/Navbar';
import SearchList from '../../components/searchList/SearchList';


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
        <SearchList />
      </div>
    </div>
  )
}
