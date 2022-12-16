import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"
import WhoToExploreList from "../../components/whoToExploreList/WhoToExploreList"
import {findUserByIdThunk} from "../../features/users/user-thunk";
import {findFollowersThunk, findFollowingThunk, followUserThunk} from "../../features/follows/follows-thunks"
import './publicProfile.scss'

const PublicProfile = () => {
    const {uid} = useParams()
    const {publicProfile} = useSelector((state) => state.users)
    // const {reviews} = useSelector((state) => state.reviews)
    const dispatch = useDispatch()
    const handleFollowBtn = () => {
        dispatch(followUserThunk({
            followed: uid
        }))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))    
        dispatch(findFollowersThunk(uid))
        dispatch(findFollowingThunk(uid))
    }, [uid])
    return(
        <>
            <Navbar/>
            <div className="profile-page-container">
                <div className="profile-container">
                    <div className="profile">
                        <div className="title">Profile
                        <button
                            onClick={handleFollowBtn}
                            className="button">
                            Follow
                            </button>
                        </div>
                        <hr/>
                        <h1>{publicProfile && publicProfile.username}</h1>
                    </div>
                    <div>
                    <WhoToExploreList/>
                    </div>
                </div>
            </div>
            
            
            {/* <ul>
                {
                    reviews && reviews.map((review) =>
                    <li>
                        <Link to={`/details/${review.imdbID}`}>
                        {review.review} {review.imdbID}
                        </Link>
                    </li>
                    )
                }
            </ul>
            <Follows uid={uid}/> */}
        </>
    )

}

export default PublicProfile