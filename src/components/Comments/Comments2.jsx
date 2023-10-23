import React from "react";
import commentsData from "../../assets/Data/video-details.json"; // Adjust the file path as needed
import "./Comments2.scss";
function Comments2() {
  return (
    <div>
      <h2>Comments</h2>
      {commentsData[0].comments.map((comment) => (
        <div key={comment.id} className="comment">
            
          <h3 class="comments__name">{comment.name}</h3>
          <p class="comments__comments">{comment.comment}</p>
          <p class="comments__date">
            {new Date(comment.timestamp).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Comments2;
