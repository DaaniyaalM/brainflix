function NewVideos(props) {
  // console.log(props);
  return (
    <ul className="NewVideos__videolist">
      {props.videos
        .filter((video) => video.id !== props.selectedVideo.id)
        .map((video) => {
          // console.log(video.image);
          return (
            <li
              className="NewVideos__list"
              key={video.id}
              onClick={() => props.clickHandler(video)}
            >
              <div className="NewVideos__wrapper">
                <h3 className="NewVideos__vidname">{video.title}</h3>
                <p className="NewVideos__channel"> {video.channel}</p>
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
