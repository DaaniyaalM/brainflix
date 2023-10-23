import { useState } from "react";
import videoData from "./assets/Data/video-details.json";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import NewVideos from "./components/NewVideos/NewVideos";
import Comments from "./components/Comments/Comments";
import Comments2 from "./components/Comments/Comments2";
import Body from "./components/Body/Body";
import "../src/components/Body/Body.scss";
import "../src/components/NewVideos/NewVideos.scss";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  function clickHandler(video) {
    console.log("test");
    console.log(video.id);
    setSelectedVideo(video);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="video__background">
        <video controls poster={selectedVideo.image}></video>
      </div>
      <div className="body__alignment">
        <div className="body__comments-container">
          <Body />
          <Comments />
          <Comments2 />
        </div>
        <NewVideos
          videos={videos}
          selectedVideo={selectedVideo}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
}

export default App;
