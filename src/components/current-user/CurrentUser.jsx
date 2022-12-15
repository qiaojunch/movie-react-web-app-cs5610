import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { profileThunk } from "../../features/users/user-thunk";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector( state => state.users );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk())
    }, [children]);
    return (children)
}

export default CurrentUser;