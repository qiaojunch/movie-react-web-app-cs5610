import React from "react";
import {useSelector} from "react-redux";
import WhoToExploreItem from "../whoToExplore/WhoToExploreItem";
import './whoToExploreList.scss';
import userArray from '../../features/users/user.json';

const WhoToExploreList = (props) => {
    const {users} = props;
    return(
        <ul className="list-group">
            <li className="list-group-item">
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