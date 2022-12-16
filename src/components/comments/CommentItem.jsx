import React from 'react';
import './comments.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCommentByIdThunk } from '../../features/comments/comments-thunk';

export default function CommentItem(props) {
  const { comment } = props;

  const dispatch = useDispatch();
  // Handle delete comment
  const handleCommentDeleteBtn = () => {
    // dispatch(deleteCommentByIdThunk( comment._id ))
  }

  return (
    <div className="comment-item-container">
        <div>
            <Link to={`/profile/${comment.author._id}`}>
              <img src={comment.author.image} />
            </Link>
        </div>
        <div className="comment-right-part">
            <div className="comment-content">
              <div className="comment-author">{comment.author.username}</div>
              <div className="comment-time">{comment.createAt}</div>
            </div>
            <button className="delete-btn comment-form-button" onClick={handleCommentDeleteBtn}>Delete</button>
            <div className="comment-text">{comment.comment}</div>
        </div>
  </div>
  )
}
