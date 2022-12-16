import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import EditField from "../../components/edit_fields/EditField";
import Navbar from "../../components/navbar/Navbar";
import WhoToExploreList from "../../components/whoToExploreList/WhoToExploreList";
import './profile.scss';
import MyList from "../../components/myList/MyList";
import { findMoivesThunk } from "../../features/movies/movie-thunk";
import { findAllUsersThunk } from "../../features/users/user-thunk";


export default function Profile() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const { movies } = useSelector( state => state.movies );
    const { currentUser } = useSelector( state => state.users );
    const {users} = useSelector(state => state.users)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findMoivesThunk());
        dispatch(findAllUsersThunk());
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
                         <h3>username</h3>
                            <EditField
                                initialValue={currentUser.username}
                                onSave={setUserName}
                            />
                            <h3>email</h3>
                            <EditField
                                initialValue={currentUser.email}
                                onSave={setEmail}
                            />
                            <h3>Date of Birth</h3>
                            <div className="info">{currentUser.DOB}</div>
                            <h3>Bio</h3>
                            <div className="info">
                                {currentUser.bio}
                            </div>
                            </div>
                        <hr/>
                        <MyList movies={movies} />
                        <h3>Following</h3>
                        <WhoToExploreList props={users}/>
                        <h3>Followers</h3>
                        <div>
                        <WhoToExploreList/>
                        </div>
                    </div>
                </div>
                
            </div>
            }
        </>
    )
}