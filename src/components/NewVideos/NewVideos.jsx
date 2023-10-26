import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewVideos(props) {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://project-2-api.herokuapp.com/videos/?api_key=4d5d21ae-edea-4a33-9ca5-1fba865a0254`
        );
        const data = response.data;
        setVideos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Fetch data when the component is mounted
  }, []);

  const clickHandler = (video) => {
    setSelectedVideo(video);
    navigate(`/videos/${video.id}`);
  };

  // Filter the videos to exclude the selected video
  const filteredVideos = videos.filter(
    (video) => video.id !== (selectedVideo ? selectedVideo.id : null)
  );

  return (
    <ul className="NewVideos__videolist">
      {filteredVideos.map((video) => {
        return (
          <li
            className="NewVideos__list"
            key={video.id}
            onClick={() => clickHandler(video)}
          >
            <div className="NewVideos__wrapper">
              <h3 className="NewVideos__vidname">{video.title}</h3>
              <p className="NewVideos__channel">{video.channel}</p>
            </div>
            <img
              className="NewVideos__video"
              src={video.image}
              alt={video.title}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default NewVideos;
