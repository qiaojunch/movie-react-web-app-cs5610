import React from "react";
import './WhoToExploreItem.scss'

const WhoToExploreItem = (
    {user}
) => {
    return(
        <li className="list-group-item">
            <div>
                <div>
                    <img height={48} src={user.image} alt="icon"/>
                </div>
                <div className="info">
                    <h3>{user.userName}</h3>
                    <div>@{user._id}</div>
                    
                </div>
                <div>
                    <button>Explore</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToExploreItem;