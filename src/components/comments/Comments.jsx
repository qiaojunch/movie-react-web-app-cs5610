import React from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

export default function Comments() {
  return (
    <div className="comments-container">
        <h3>Comments</h3>
        <div className="comment-form">
            <CommentForm />
        </div>
        <div className="comments">
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </div>
    </div>
  )
}
