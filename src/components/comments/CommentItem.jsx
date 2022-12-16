import React from 'react';
import './comments.scss';

export default function CommentItem(props) {
  const { comment } = props;

  console.log("****comentItem***: ", comment);

  return (
    <div className="comment-item-container">
        <div>
            <img src={comment.author.image} />
        </div>
        <div className="comment-right-part">
            <div className="comment-content">
              <div className="comment-author">{comment.author.username}</div>
              {/* <div className="comment-time">{comment.time}</div> */}
            </div>
            <div className="comment-text">{comment.comment}</div>
        </div>
  </div>
  )
}
