import React from "react";
import './WhoToExploreItem.scss'

const WhoToExploreItem = (
    {user}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={user.image} alt="icon"/>
                </div>
                <div className="info">
                    <h3>{user.userName}</h3>
                    <div>@{user._id}</div>
                    
                </div>
                <div className="col-2">
                    <button className="button">Explore</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToExploreItem;