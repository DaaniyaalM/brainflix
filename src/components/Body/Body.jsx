import "./Body.scss";
import ViewsPic from "../../assets/Icons/views.svg";
import LikesPic from "../../assets/Icons/likes.svg";
import NewVideos from "../NewVideos/NewVideos";

function Body({ video }) {
  return (
    <div className="body">
      <h1 className="body__header">{video?.title}</h1>{" "}
      <div className="body__details">
        <div className="details__stats">
          <p className="details__name">{video?.channel}</p>{" "}
          <p className="details__date">
            {new Date(video?.timestamp).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        <div className="details__stats2">
          <div className="details__views-icon">
            <img src={ViewsPic} alt="Views" />
            <p className="details__views">{video?.views}</p>{" "}
          </div>
          <div className="details__likes-icon">
            <img src={LikesPic} alt="Likes" />
            <p className="details__likes">{video?.likes}</p>{" "}
          </div>
        </div>
      </div>
      <p className="details__text">{video?.description}</p>{" "}
    </div>
  );
}

export default Body;
