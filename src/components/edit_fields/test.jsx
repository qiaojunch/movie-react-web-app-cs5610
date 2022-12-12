import React, { useState} from "react";

const test = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleUserNameChange = (event) => {
      setUserName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    return (
      <div className="edit-container">
        <input
          type="text"
          value={userName}
          onChange={handleUserNameChange}
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button>Edit</button>
        <button>Save</button>
      </div>
    );
  };

  export default test