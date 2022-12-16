import React from 'react';
import './comments.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createCommentThunk } from '../../features/comments/comments-thunk';

export default function CommentForm() {
  const [comment, setComment] = useState("");
  const {imdbID} = useParams();

  const dispatch = useDispatch();

  // handle create comment button
  const handleCommentBtn = () => {
    if (comment) {

      console.log("***comment form***: ", comment);
      dispatch(createCommentThunk({ comment, imdbID }))
    } else {
      alert("Please enter some text to comment!")
    }
  }
  // handle cancel comment button
  const handleCancelBtn = () => {
    setComment("");
  }

  return (
    <form >
      <textarea 
        className="comment-form-textarea"
        placeholder="Add a comment..."
        value={comment}
        onChange={ e => setComment(e.target.value)}
      />
      <button
        className="comment-form-button comment-form-cancel-button"
        onClick={handleCancelBtn} >
        Cancel
      </button>
      <button 
        className="comment-form-button" 
        onClick={handleCommentBtn}>
          Comment
      </button>
    </form>
  )
}
