import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { registerThunk } from "../../features/users/user-thunk";
import "./register.scss";

export default function Register() {
  const [password, setPassword] = useState(""); 
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();  // handle sign-in button

  const handleLoginBtn = () => {
    let path =`/`;
    console.log("login click: ", path);
    navigate(path);
  }
  const handlRegisterBtn = () => {
    dispatch(registerThunk({username, password}));
    navigate(`/login`);
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src='images/netfly-logo.png'
            alt=""
          />
          <button className="loginButton" onClick={handleLoginBtn}>Sign In</button>
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