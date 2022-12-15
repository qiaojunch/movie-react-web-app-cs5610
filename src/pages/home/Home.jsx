import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './home.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieList from '../../components/movieList/MovieList';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [dispatch]);

  return (
    <div className='home'>
      <Navbar />
      <Featured/>
      <MovieList/>
    </div>
  )
}
