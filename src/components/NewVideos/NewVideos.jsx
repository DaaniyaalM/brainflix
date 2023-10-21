function NewVideos(props) {
  // console.log(props);
  return (
    <ul className="NewVideos__videolist">
      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => {
          // console.log(video.image);
          return (
            <li key={video.id} onClick={() => props.clickHandler(video)}>
              <h3 className="NewVideos__vidname">{video.title}</h3>
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
