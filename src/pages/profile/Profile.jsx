import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import EditField from "../../components/edit_fields/EditField";
import Navbar from "../../components/navbar/Navbar";
import WhoToExploreList from "../../components/whoToExploreList/WhoToExploreList";
import './profile.scss';
import MyList from "../../components/myList/MyList";
import { findMoivesThunk } from "../../features/movies/movie-thunk";
import { findCommentsByAuthorThunk } from "../../features/comments/comments-thunk";
import CommentItem from "../../components/comments/CommentItem";
import { findAllUsersThunk, updateUserThunk } from "../../features/users/user-thunk";

export default function Profile() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [DOB, setDOB] = useState('');
    const { movies } = useSelector( state => state.movies );
    const { currentUser } = useSelector( state => state.users );
    const { comments } = useSelector( state => state.comments );
    const dispatch = useDispatch();
    
    useEffect(() => {
        try {
            dispatch(findMoivesThunk())
            dispatch(findCommentsByAuthorThunk(currentUser._id))
        } catch (err) {
            console.log("profile page errors:", err);
        }
    }, []);

    const handleProfileUpdateBtn = () => {
        const userUpdates = {
            ...currentUser,
            username: username,
            email: email,
            DOB: DOB,
        }
        dispatch(updateUserThunk(userUpdates))   // save updated profile
        dispatch(findAllUsersThunk())     // call to update currentUser after updating
    }

    return (
        <>
            <Navbar/>
            {currentUser &&
                <div className="profile-page-container">
                <div className="profile-container">
                    <div className="profile">
                        <div className="title">Welcome {currentUser.username}</div>
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
                            <EditField
                                initialValue={currentUser.DOB}
                                onSave={setDOB}
                            />
                            <button className="update-btn"
                                onClick={handleProfileUpdateBtn}>
                                Update profile
                            </button>
                            </div>
                        <hr/>
                        <MyList movies={movies} />
                        <h3>Following</h3>
                        <hr/>
                        <WhoToExploreList />
                        <h3>Followers</h3>
                        <hr/>
                        <div>
                        <WhoToExploreList/>
                        </div>
                        <h3>Comments</h3>
                        <hr/>
                        <div className="comment-section">
                        { comments && comments.map((item) => <CommentItem key={item._id} comment={item} /> ) }
                        { !comments && <p>They haven't left any comments yet!</p>}
                        </div>
                    </div>
                </div>
                
            </div>
            }
        </>
    )
}