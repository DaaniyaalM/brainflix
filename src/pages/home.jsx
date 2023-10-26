import NewVideos from "../components/NewVideos/NewVideos";
import Comments from "../components/Comments/Comments";
import Comments2 from "../components/Comments/Comments2";
import Body from "../components/Body/Body";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Home(props) {
  //   function GoalPost() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { id } = useParams();
  console.log(id);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=4d5d21ae-edea-4a33-9ca5-1fba865a0254`
      );
      setSelectedVideo(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [id]);
  //   }
  return (
    <div className="home">
      <div className="video__background">
        <video controls poster={selectedVideo?.image}></video>
      </div>
      <div className="body__alignment">
        <div className="body__comments-container">
          <Body />
          <Comments />
          <Comments2 />
        </div>
        <NewVideos />
      </div>
    </div>
  );
}

export default Home;
