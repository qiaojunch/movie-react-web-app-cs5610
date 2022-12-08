import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './home.scss';
import List from '../../components/list/List';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import MovieList from '../../components/movieList/MovieList';

export default function Home() {
  const movieText = "Harry";
  const showText = "Friends"
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch movies data from omdb api
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <div className='home'>
      <Navbar />
      <Featured/>
      <MovieList/>
    </div>
  )
}
