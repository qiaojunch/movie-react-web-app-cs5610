import React from "react";
import {useSelector} from "react-redux";
import WhoToExploreItem from "../whoToExplore/WhoToExploreItem";
import './whoToExploreList.scss';

const WhoToExploreList = () => {
    const userArray = useSelector(
        (state) => state.user
    )
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to Explore</h3>
            </li>
            {
                userArray.map(user =>
                    <WhoToExploreItem
                        key={user._id}
                        user={user}/>
                )
            }
        </ul>
    )
}

export default WhoToExploreList;