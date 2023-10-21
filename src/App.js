// import logo from "./logo.svg";
import { useState } from "react";
import videoData from "./assets/Data/video-details.json";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import NewVideos from "./components/NewVideos/NewVideos";
import Comments from "./components/Comments/Comments";
import Body from "./components/Body/Body";
import "../src/components/NewVideos/NewVideos.scss";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  function clickHandler(video) {
    console.log("test");
    console.log(video.id);
    // const foundVideo = videos.find((videoObj) => videoObj.id === video.id);
    // console.log(foundVideo);
    setSelectedVideo(video);
  }

  return (
    <div className="App">
      <Navbar />
      <video controls poster={selectedVideo.image}></video>
      <Comments />
      <Body />
      <NewVideos
        videos={videos}
        selectedVideo={selectedVideo}
        clickHandler={clickHandler}
      />

      <h3>Video List</h3>
    </div>
  );
}

export default App;
