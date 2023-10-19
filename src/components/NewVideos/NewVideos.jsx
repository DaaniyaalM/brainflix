function NewVideos(props) {
  console.log(props.videos);
  return props.videos.map((video) => {
    return (
      // <div className="NewVideos" key={video.id}>
      //   <p className="NewVideos__title">{video.title}</p>
      //   <img class="NewVideos__image" src={video.image}></img>
      //   <p className="NewVideos__channel">{video.channel}</p>
      // </div>

      <ul class="NewVideos__videolist">
        {props.videos
          .filter((video) => video.id !== props.selectedVideo.id)
          .map((video) => {
            return (
              <li key={video.id} onClick={() => props.clickHandler(video)}>
                <h3 class="NewVideos__vidname">{video.name}</h3>
                <img
                  class="NewVideos__video"
                  src={video.image}
                  alt={video.name}
                />
              </li>
            );
          })}
      </ul>
    );
  });
}
export default NewVideos;
