import { useState } from "react";
import videoData from "./assets/Data/video-details.json";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import "../src/components/Body/Body.scss";
import "../src/components/NewVideos/NewVideos.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Upload from "./pages/UploadVids";

function App() {
  const [videos, setVideos] = useState(videoData);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  function clickHandler(video) {
    setSelectedVideo(video);
  }
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                selectedVideo={selectedVideo}
                videos={videos}
                clickHandler={clickHandler}
              />
            }
          />
          <Route
            exact
            path="/videos/:id"
            element={
              <Home
                selectedVideo={selectedVideo}
                videos={videos}
                clickHandler={clickHandler}
              />
            }
          />
          <Route path="upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
