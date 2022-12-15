import React from 'react';
import { Link } from 'react-router-dom';
import './myList.scss';

export default function MyListItem(props) {
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
                            <p>{data.title}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
      )
}
