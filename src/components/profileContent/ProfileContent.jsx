import React from 'react';
import './profile-content.scss';

const ProfileContent = ({ user }) => {
  return (
    <div className="profile-content">
      <div className="profile-username">{user.userName}</div>
      <div className="profile-email">{user.email}</div>
      <div className="profile-comments">
        {user.comments.map((comment) => (
          <div className="profile-comment">{comment}</div>
        ))}
      </div>
    </div>
  );
};

export default ProfileContent;