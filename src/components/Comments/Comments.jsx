import "./Comments.scss";

function Comments() {
  return (
    <div className="comment-section">
      <p className="comment-count">3 Comments</p>

      <section className="comments"></section>

      <form className="comments__form">
        <div className="comments_container">
          <div className="name-label-container">
            <div className="profile-picture"></div>

            <label className="comments__label" htmlFor="comment"></label>
            <div className="comments__friendshipwrapper">
              <h2 className="comments__title">Join The Conversation</h2>
              <textarea className="comments__text" required=""></textarea>
            </div>
          </div>
        </div>
        <button className="comments__button">Comment</button>
      </form>
    </div>
  );
}
export default Comments;
