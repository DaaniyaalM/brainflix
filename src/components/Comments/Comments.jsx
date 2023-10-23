import "./Comments.scss";

function Comments() {
  return (
    <div className="comment-section">
      <p className="comment-count">3 Comments</p>

      <section className="comments"></section>

      <form className="comments__form">
        <h2 className="comments__title">Join The Conversation</h2>
        <div className="comments_container">
          <div className="name-label-container">
            <div className="profile-picture"></div>

            <label className="comments__label" htmlFor="comment"></label>
            <textarea className="comments__text" required=""></textarea>
          </div>
          <button className="comments__button">Comment</button>
        </div>
      </form>
    </div>
  );
}
export default Comments;
