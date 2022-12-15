import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './home.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../../components/movieList/MovieList';
import { findMoivesThunk, findShowsThunk, findMovieRandomThunk } from '../../features/movies/movie-thunk';


export default function Home() {
  const { movies, shows, featured } = useSelector(state => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(findMoivesThunk());
      dispatch(findShowsThunk());
      dispatch(findMovieRandomThunk());
  }, []);

  return (
    <div className='home'>
      <Navbar />
      <Featured featured={featured} />
      <MovieList movies={movies} shows={shows} />
    </div>
  )
}
