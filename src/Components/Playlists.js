import { useVideo } from "../Contexts";
import { Link } from "react-router-dom";

export function Playlists() {
  const { state:{playlists} } = useVideo();

  return (
    <div className="playlists-wrapper">
      {playlists.map((playlist) => {
        console.log("logginf playist...",playlist);
        return (
          <div>
            <h3>{playlist.listName}</h3>
            <div className="playlist-items-wrapper">
            {playlist.listVideos.map((item) => {
              return (
                <div className="video-item" key={item.id}>
                  <Link to={`/video/${item.id}`}>
                    {" "}
                    <img
                      style={{ width: "100%", height: "50%" }}
                      src={item.thumbnail}
                      alt="thumbnail"
                    />{" "}
                  </Link>
                  <div className="video-description">
                    <div class="avatar-wrapper-small">
                      <img
                        class="avatar-small"
                        src={item.avatar}
                        alt="avatar"
                      />
                    </div>
                    <h4>{item.videoTitle}</h4>
                    <p className="small">{item.channelName}</p>
                    <p>{item.level}</p>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
