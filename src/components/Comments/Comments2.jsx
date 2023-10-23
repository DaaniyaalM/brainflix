import React from "react";
import commentsData from "../../assets/Data/video-details.json"; // Adjust the file path as needed
import "./Comments2.scss";
function Comments2() {
  return (
    <div>
      {commentsData[0].comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div className="comments__dp"></div>
          <div className="comments__name-container">
            <h3 className="comments__name">{comment.name}</h3>
            <p className="comments__comments">{comment.comment}</p>
          </div>
          <p className="comments__date">
            {new Date(comment.timestamp).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Comments2;
