import commentsData from "../../assets/Data/video-details.json";

function Comments() {
  return (
    <div className="comment-section">
      <h2 className="comments__title">Join The Conversation</h2>

      <section className="comments"></section>
      <form className="comments__form">
        <div className="name-label-container">
          <div className="profile-picture"></div>
          <div className="column">
            <label className="name__label" htmlFor="name">
              Name:
            </label>
            <input className="name" type="text" required="" />
          </div>
        </div>

        <label className="comments__label" htmlFor="comment">
          Comment:
        </label>
        <textarea className="comments__text" required=""></textarea>
        <br></br>

        <button className="comments__button">Comment</button>
      </form>
    </div>
  );
}
export default Comments;
