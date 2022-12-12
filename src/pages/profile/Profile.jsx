import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import React, { useState } from 'react';
import EditField from "../../components/edit_fields/EditField";
import Navbar from "../../components/navbar/Navbar";
import WhoToExploreList from "../../components/whoToExploreList/WhoToExploreList";
import userReducer from "../../features/users/user-reducer";
import './profile.scss';
import MyList from "../../components/myList/MyList";

const store = configureStore(
    {reducer: {user:userReducer}}
)

export default function Profile() {
    const [userName, setUserName] = useState('Web dev');
    const [email, setEmail] = useState('webdev@gmail.com');
    const movies = [
        { id: 1, title: 'Movie 1', imageUrl: 'https://user-images.githubusercontent.com/75476123/206970126-581071e1-5d9a-4243-bbe8-f36b2481ee08.png' },
        { id: 2, title: 'Movie 2', imageUrl: 'https://user-images.githubusercontent.com/75476123/206970126-581071e1-5d9a-4243-bbe8-f36b2481ee08.png' },
        { id: 3, title: 'Movie 3', imageUrl: 'https://user-images.githubusercontent.com/75476123/206970126-581071e1-5d9a-4243-bbe8-f36b2481ee08.png' },
      ];

      const handleMovieClick = (movieId) => {
        // Do something with the clicked movie's id
      };

    return (
        <Provider store={store}>
            <Navbar/>
            <div className="profile-page-container">
                <div className="profile-container">
                    <div className="profile">
                        <div className="title">My Profile</div>
                        <hr/>
                        {/* <div className="username">Username:</div>
                        <div className="email">Email:</div> */}
                         <div className="app">
                            <EditField
                                initialValue={userName}
                                onSave={setUserName}
                            />
                            <EditField
                                initialValue={email}
                                onSave={setEmail}
                            />
                            </div>
                        <hr/>
                        <div className="reviews">My Lists</div>
                        <MyList movies={movies} onMovieClick={handleMovieClick} />
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToExploreList/>
                    </div>
                </div>
            </div>
            
        </Provider>
    )
}