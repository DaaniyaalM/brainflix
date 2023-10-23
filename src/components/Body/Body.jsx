import "./Body.scss";
import ViewsPic from "../../assets/Icons/views.svg";
import LikesPic from "../../assets/Icons/likes.svg";

function Body() {
  return (
    <div className="body">
      <h1 className="body__header">
        BMX Rampage: 2021 <br></br> Highlights
      </h1>
      <div className="body__details">
        <div clasName="details__stats">
          <p className="details__name">By Red Crow</p>

          <p className="details__date">07/11/2021</p>
        </div>
        <div clasName="details__stats2">
          <div className="details__views-icon">
            <img src={ViewsPic} alt="Views" />
            <p className="details__views">1,001,023</p>
          </div>
          <div className="details__likes-icon">
            <img src={LikesPic} alt="Likes" />

            <p className="details__likes">110,985</p>
          </div>
        </div>
      </div>
      <p className="details__text">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
    </div>
  );
}
export default Body;
