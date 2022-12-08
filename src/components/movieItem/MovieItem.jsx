import React from 'react';
import './movieItem.scss';
import { Link } from 'react-router-dom';

export default function MovieItem(props) {
    const {data} = props;

  return (
    <div className="movie-item">
        <Link to={`/detail/${data.imdbID}`} >
            <div className="item-inner">
                <div className="item-top">
                    <img src={data.Poster} alt={data.Title} />
                </div>
                <div className="item-bottom">
                    <div className="item-info">
                        <h4>{data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}
