import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import EditField from "../../components/edit_fields/EditField";
import Navbar from "../../components/navbar/Navbar";
import WhoToExploreList from "../../components/whoToExploreList/WhoToExploreList";
import './profile.scss';
import MyList from "../../components/myList/MyList";
import { findMoivesThunk } from "../../features/movies/movie-thunk";


export default function Profile() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const { movies } = useSelector( state => state.movies );
    const { currentUser } = useSelector( state => state.users );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findMoivesThunk());
        console.log("profile movies: ", movies);
    }, []);
    
    return (
        <>
            <Navbar/>
            {currentUser &&
                <div className="profile-page-container">
                <div className="profile-container">
                    <div className="profile">
                        <div className="title">My Profile</div>
                        <hr/>
                         <div className="app">
                            <EditField
                                initialValue={currentUser.username}
                                onSave={setUserName}
                            />
                            <EditField
                                initialValue={currentUser.email}
                                onSave={setEmail}
                            />
                            </div>
                        <hr/>
                        <MyList movies={movies} />
                    </div>
                    <h3>Following</h3>
                    <WhoToExploreList />
                    <h3>Followers</h3>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToExploreList/>
                    </div>
                </div>
            </div>
            }
        </>
    )
}