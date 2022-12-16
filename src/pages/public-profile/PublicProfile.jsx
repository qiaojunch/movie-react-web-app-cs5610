import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import MyList from "../../components/myList/MyList"
import { findMoivesThunk } from "../../features/movies/movie-thunk";
import './publicProfile.scss'
import { findUserByIdThunk } from "../../features/users/user-thunk"
import { findCommentsByAuthorThunk } from "../../features/comments/comments-thunk"
import { findFollowersThunk, findFollowingThunk, followUserThunk } from "../../features/follows/follow-thunk"
import WhoToExploreItem from "../../components/whoToExplore/WhoToExploreItem"

const PublicProfile = () => {
    const {uid} = useParams(); 
    const {publicProfile} = useSelector( state => state.users);
    const {comments } = useSelector( state => state.comments );
    const { followers, followings } = useSelector( state => state.follows );
    const { movies } = useSelector( state => state.movies );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findUserByIdThunk(uid));   // fetch the user 
        dispatch(findCommentsByAuthorThunk(uid));  // fetch all comments by user
        dispatch(findFollowersThunk(uid));  // fetch the user's followers
        dispatch(findFollowingThunk(uid));  // fetch the user's following
        dispatch(findMoivesThunk());  // get user's favorite movies
    }, [uid, dispatch]);

    // handl follow button
    const handleFollowBtn = () => {
        console.log("follow btn clicked!");
        dispatch( followUserThunk({ 
            followed: uid 
        }) )
    }

    return(
        <>
            <Navbar/>
            <div className="profile-page-container">
                <div className="profile-container">
                    <div className="profile">
                        <div className="title">{publicProfile && <h3>{publicProfile.username}'s Profile</h3>}
                        <button
                            onClick={handleFollowBtn}
                            className="button" >
                            Follow
                        </button>
                        </div>
                        <hr/>
                        <h3>username: <span>{publicProfile && publicProfile.username}</span></h3>
                        <h3>email: <span>{publicProfile && publicProfile.email}</span></h3>
            
                        <MyList movies={movies} />
                    </div>
                    <div>
                        {/* <h3>Following</h3>
                        { followings && followings.map( follow => 
                            <WhoToExploreItem user={follow.followed}/>)
                        }
                        <h3>Followers</h3>
                        { followers && followings.map( follow => 
                            <WhoToExploreItem user={follow.follower}/>)
                        } */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PublicProfile