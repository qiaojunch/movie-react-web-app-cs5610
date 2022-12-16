import React from "react";
import './WhoToExploreItem.scss'

const WhoToExploreItem = (
    {user}
) => {
    return(
        <li className="list-group-item">
            <div>
                <div className="info">
                    <img height={48} src={user.image} alt="icon"/>
                    <h3>{user.userName}</h3>
                    <button>Explore</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToExploreItem;