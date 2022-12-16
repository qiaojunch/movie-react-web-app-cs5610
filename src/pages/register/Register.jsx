import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Navigate, useNavigate} from "react-router";
import { Link } from "react-router-dom";
import { registerThunk } from "../../features/users/user-thunk";
import "./register.scss";

export default function Register() {
  const [password, setPassword] = useState(""); 
  const [username, setUsername] = useState("");
  const { currentUser } = useSelector( state => state.users );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlRegisterBtn = (e) => {
    e.preventDefault();
    dispatch(registerThunk({username, password}));
  }

  if (currentUser) {
    console.log("register user", currentUser);
    return (<Navigate to={'/profile'}/>)
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <Link to='/'><img src='/images/netfly-logo.png' className='logo' alt=''/></Link>
          <button className="loginButton" onClick={() => navigate('/login')}>Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {/* if email is typed in, then show input field for password, if no email input, only show email input field */}
        <form className="input">
            <input 
              placeholder="username" 
              value={username}
              onChange={ e => setUsername(e.target.value)}
              />
            <input 
              placeholder="password" 
              value={password}
              onChange={ e => setPassword(e.target.value)}
              />
            <button 
              className="registerButton" 
              onClick={handlRegisterBtn}>
              Start
            </button>
          </form>
      </div>
    </div>
  );
}