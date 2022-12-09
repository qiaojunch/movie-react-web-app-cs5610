import Navbar from "../../components/navbar/Navbar";
import './profile.scss';

export default function Profile() {
    return (
        <>
            <Navbar/>
            <div className="profile-page-container">
                <div className="profile-container">
                    <div className="profile">
                        <div className="title">My Profile</div>
                        <hr/>
                        <div className="username">Username:</div>
                        <div className="email">Email:</div>
                        <hr/>
                        <div className="reviews">My Reviews/Comments</div>
                    </div>
                    <div className="who-to-explore">Who to explore</div>
                </div>
                
            </div>
        </>
    )
}