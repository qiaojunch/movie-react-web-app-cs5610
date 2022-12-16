import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../features/users/user-thunk";
import {Navigate} from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch();

  const handleLoginBtn = (e) => {
    e.preventDefault();
    dispatch(loginThunk({username, password}))
  }

  if (currentUser) {
    return (<Navigate to={'/profile'}/>)
  }
  
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Link to='/'><img src='/images/netfly-logo.png' className='logo' alt=''/></Link>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            placeholder="Username" 
            value={username}
            onChange={ e => setUsername(e.target.value)}
          />
          <input type="password" 
            placeholder="Password"
            value={password}
            onChange={ e => setPassword(e.target.value)}
          />
          <button className="loginButton"
            onClick={handleLoginBtn}>Sign In</button>
          <span>
            New to Netfly? <Link to='/register'><b>Sign up now.</b></Link>
          </span>
        </form>
      </div>
    </div>
  );
}