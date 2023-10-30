// Comments2.js
import React from "react";
import "./Comments2.scss";

function Comments2({ comments }) {
  return (
    <div>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comments__dp"></div>
            <div className="comments__name-container">
              <h3 className="comments__name">{comment.name}</h3>
              <p className="comments__comments">{comment.comment}</p>
            </div>
            <p className="comments__date">
              {comment.timestamp
                ? new Date(comment.timestamp).toLocaleDateString()
                : "Date Not Available"}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Comments2;
