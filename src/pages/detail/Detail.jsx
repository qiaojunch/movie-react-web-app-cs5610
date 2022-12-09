import React, { useEffect } from 'react';
import './detail.scss';
import Navbar from '../../components/navbar/Navbar';
import Comments from '../../components/comments/Comments';
import { Star, Theaters, ThumbUp, Event, Favorite } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';

export default function Detail() {
  const {imdbID} = useParams();
  const data = useSelector(getSelectedMovieOrShow);
  const dispatch = useDispatch();

  console.log("imdbID: ",imdbID);
  console.log("detail: ",data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID])

  return (
    <>
      <Navbar />
      <div className="detail-container">
        <div className="movie-section">
          <div className="section-left">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="section-right">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>IMDB Rating <Star className="star-icon" /> : {data.imdbRating}</span>
              <span>IMDB Votes <ThumbUp className="like-icon"/> : {data.Votes}</span>
              <span>Runtime <Theaters className="runtime-icon"/> : {data.Runtime}</span>
              <span>Year <Event className="year-icon"/> : {data.Year}</span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Dirctor</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Country</span>
                <span>{data.Country}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="my-list-section">
          <span>Add to my list: <Favorite className="favorite-icon" /></span>
        </div>
        <div className="comment-section">
          <Comments />
        </div>
      </div>
    </>
  )
}
