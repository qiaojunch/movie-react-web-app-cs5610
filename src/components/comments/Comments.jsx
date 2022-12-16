import React from 'react';
import { useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

export default function Comments(props) {
  const { comments } = props;
  const { currentUser } = useSelector( state => state.users );

  // fetch list of comments 

  return (
    <div className="comments-container">
        <h3>Comments</h3>
        { currentUser && 
          <div className="comment-form">
            <CommentForm />
          </div>
        }
        <div className="comments">
            { comments && comments.map((comment) => <CommentItem key={comment._id} comment={comment} /> ) }
        </div>
    </div>
  )
}
