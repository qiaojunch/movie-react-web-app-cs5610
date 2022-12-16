import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import MyList from "../../components/myList/MyList"
import { findMoivesThunk } from "../../features/movies/movie-thunk";
import './publicProfile.scss'

const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    const { movies } = useSelector( state => state.movies );
    const [comment, setComment] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findMoivesThunk());
        console.log("profile movies: ", movies);
    }, []);
    return(
        <>
            <Navbar/>
            <div className="profile-page-container">
                <div className="profile-container">
                    <div className="profile">
                        <div className="title">Profile
                        <button
                            // onClick={handleFollowBtn}
                            className="button">
                            Follow
                            </button>
                        </div>
                        <hr/>
                        <h3>username</h3>
                        {/* <h1>{publicProfile && publicProfile.username}</h1> */}
                        <h3>Bio</h3>
                        <h3>Comments</h3>
                        {/* connect with comments api */}
                        <MyList movies={movies} />
                    </div>
                    <div>
                    
                    </div>
                </div>
            </div>
        </>
    )

}

export default PublicProfile