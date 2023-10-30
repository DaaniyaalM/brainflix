import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NewVideos from "../components/NewVideos/NewVideos";
import Comments from "../components/Comments/CommentsPost";
import Comments2 from "../components/Comments/Comments2";
import Body from "../components/Body/Body";

function Home(props) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=4d5d21ae-edea-4a33-9ca5-1fba865a0254`
        );
        setSelectedVideo(response.data);
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
          {/* Pass the selected video as a prop to Body */}
          <Comments
            comments={selectedVideo ? selectedVideo.comments : []}
          />{" "}
          {/* Pass the comments array as a prop to Comments */}
          <Comments2
            comments={selectedVideo ? selectedVideo.comments : []}
          />{" "}
          {/* Pass the comments array as a prop to Comments2 */}
        </div>
        <NewVideos />
      </div>
    </div>
  );
}

export default Home;
