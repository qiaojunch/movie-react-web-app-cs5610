import React from 'react';
import './comments.scss';
import { useState } from 'react';

export default function CommentForm() {
  const [text, setText] = useState("");

  return (
    <form >
      <textarea 
        className="comment-form-textarea"
        placeholder="Add a comment..."
        value={text}
        onChange={ e => setText(e.target.value)}
      />
      <button
        className="comment-form-button comment-form-cancel-button"
        >
        Cancel
      </button>
      <button 
        className="comment-form-button" >
          Comment
      </button>
    </form>
  )
}
