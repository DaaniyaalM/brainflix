import NewVideos from "../components/NewVideos/NewVideos";
import Comments from "../components/Comments/Comments";
import Comments2 from "../components/Comments/Comments2";
import Body from "../components/Body/Body";

function Home(props) {
  return (
    <div className="home">
      <div className="video__background">
        <video controls poster={props.selectedVideo.image}></video>
      </div>
      <div className="body__alignment">
        <div className="body__comments-container">
          <Body />
          <Comments />
          <Comments2 />
        </div>
        <NewVideos
          videos={props.videos}
          selectedVideo={props.selectedVideo}
          clickHandler={props.clickHandler}
        />
      </div>
    </div>
  );
}

export default Home;
