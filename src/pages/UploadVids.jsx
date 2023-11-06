import { useState } from "react";
import uploadThumbnail from "../assets/Images/Upload-video-preview.jpg";
import "./UploadVids.scss";
import axios from "axios";

const Upload = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

  const handleTitleChange = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setVideoDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Title:", videoTitle);
    console.log("Description:", videoDescription);

    // Assuming you want to show an alert when the request is successful
    axios
      .post("http://localhost:8080/upload", {
        title: videoTitle,
        description: videoDescription,
      })
      .then(() => {
        alert("Video added successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="Upload">
      <h2 className="Upload__header">Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <p className="Upload__text">Video THUMBNAIL</p>
        <img
          src={uploadThumbnail}
          alt="Thumbnail"
          className="Upload__thumbnail"
        />

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
        <div className="Button__container">
          <button className="Upload__button" type="submit">
            PUBLISH
          </button>
          <button className="Cancel__button" type="button">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
