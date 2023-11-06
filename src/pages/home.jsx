import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NewVideos from "../components/NewVideos/NewVideos";
import Comments from "../components/Comments/CommentsPost";
import Comments2 from "../components/Comments/Comments2";
import Body from "../components/Body/Body";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const navigateToVideo = (videoId) => {
    navigate(`/videos/${videoId}`);
  };

  let videoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

  useEffect(() => {
    async function fetchData() {
      if (id) {
        videoId = id;
      }
      try {
        const response = await axios.get(
          `http://localhost:8080/videos/${videoId}`
        );
        setSelectedVideo(response.data);
        // navigateToVideo("84e96018-4022-434e-80bf-000ce4cd12b8");
        console.log(navigateToVideo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="home">
      <div className="video__background">
        <video controls poster={selectedVideo?.image}></video>
      </div>
      <div className="body__alignment">
        <div className="body__comments-container">
          <Body video={selectedVideo} />{" "}
          <Comments comments={selectedVideo ? selectedVideo.comments : []} />
          <Comments2 comments={selectedVideo ? selectedVideo.comments : []} />
        </div>
        <NewVideos />
      </div>
    </div>
  );
}

export default Home;
