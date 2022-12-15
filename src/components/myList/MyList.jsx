import React from 'react';
import Slider from 'react-slick';
import { myListSettings } from '../../common/myList-setting';
import MyListItem from './MyListItem';
import './myList.scss';

const MyList = (props) => {
  const { movies } = props;

  return (
    <div className="movie-wrapper">
        <div className="movie-list">
            <h2>My List</h2>
            <div className="movie-container">
            {
              movies && <Slider {...myListSettings}>{movies.map( 
                    movie => <MyListItem key={movie._id} data={movie}/>)}</Slider>
            }
            {
              !movies && <h3>Your list empty</h3>
            }
                
            </div>
        </div>
    </div>
  )
}

export default MyList;
