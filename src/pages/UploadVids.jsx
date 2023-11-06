import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
import uploadThumbnail from "../assets/Images/Upload-video-preview.jpg";
import "./UploadVids.scss";
import axios from "axios";

const Upload = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleTitleChange = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setVideoDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const video = {
      title: videoTitle,
      description: videoDescription,
      thumbnail: "http://localhost:8080/images/image0", // Fix the URL here
    };

    axios
      .post("http://localhost:8080/upload", video)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="Upload">
      <h2 className="Upload__header">Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="Upload__form">
          <p className="Upload__text">Video THUMBNAIL</p>
          <img
            src={uploadThumbnail}
            alt="Thumbnail"
            className="Upload__thumbnail"
          />
          <div className="Upload__media-modifier">
            <p className="Upload__text">TITLE YOUR VIDEO</p>
            <input
              type="text"
              className="Upload__title-input"
              value={videoTitle}
              onChange={handleTitleChange}
              placeholder="Add a title to your video"
            />

            <p className="Upload__text">ADD A VIDEO DESCRIPTION</p>
            <textarea
              className="Upload__description-input"
              value={videoDescription}
              onChange={handleDescriptionChange}
              placeholder="Add a description for your video"
            ></textarea>
          </div>
        </div>
        <div className="Button__container">
          <button className="Upload__button" type="submit">
            PUBLISH
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
