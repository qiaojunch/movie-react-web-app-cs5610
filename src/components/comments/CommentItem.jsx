import React from 'react';
import './comments.scss';

export default function CommentItem({comment = {
  userName: "Alex",
  time: "12/12/2022",
  comment: "Lorem Ipsum is simply dummy text of the printing and typesetting dummy text of the printing and typesetting dummy text of the printing and typesetting dummy text of the printing and typesetting dummy text of the printing and typesetting"
}}) {
  return (
    <div className="comment-item-container">
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png" />
        </div>
        <div className="comment-right-part">
            <div className="comment-content">
              <div className="comment-author">{comment.userName}</div>
              <div className="comment-time">{comment.time}</div>
            </div>
            <div className="comment-text">{comment.comment}</div>
        </div>
  </div>
  )
}
