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
                    <img src={data.img} alt={data.title} />
                </div>
                <div className="item-bottom">
                    <div className="item-info">
                        <h4>{data.title}</h4>
                        <p>{data.year}</p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}
