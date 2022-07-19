// import './CreateNewPlaylist.css';

// const CreateNewPlaylist = () => {
//     return (
//         <>
//             <div className='createNewPlaylist-page-main-container'>
//                 <div className='createNewPlaylist-page-sub-container'>
//                     <h3>Create New Playlist</h3>
//                     <label htmlFor="">Playlist Name</label>
//                     <input type="text" />
//                     <button>Create Playlist</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CreateNewPlaylist;




import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../pages/CreateNewPlaylist/CreateNewPlaylist.css";
import { usePlaylist } from "../../contexts/playlistContext";


const PlaylistAdd = ({ video, playlistWindow, setPlaylistWindow }) => {
  const { playlist, playlistDispatch } = usePlaylist();
  const [newPlaylistRoute, setNewPlaylistRoute] = useState(false);
  const [newPlaylistText, setNewPlaylistText] = useState("");
  const inputRef = useRef(null);
  const playlistItems = Object.keys(playlist);
  console.log("Window", playlistWindow);
  return (
    <>
      <div className="playlist__add"></div>
      <div className="playlist__card">
        <div className="playlist__card__top">
          <p>Add to Playlist</p>
          {/* <FontAwesomeIcon */}
            {/* // icon={faTimes} */}
            style={{ cursor: "pointer" }}
            onClick={() => setPlaylistWindow(() => false)}
          {/* /> */}
        </div>
        <div className="playlist__card__list">
          {playlistItems.map((item) => (
            <li key={uuidv4()}>
              <input
                type="checkbox"
                className="checkbox"
                checked={
                  playlist[item].find((item) => item.id === video.id)
                    ? true
                    : false
                }
                name=""
                id=""
                onChange={() => {
                  return playlist[item].find((item) => item.id === video.id)
                    ? playlistDispatch({
                        type: "REMOVE_FROM_PLAYLIST",
                        video,
                        item
                      })
                    : playlistDispatch({
                        type: "ADD_VIDEO_TO_PLAYLIST",
                        video,
                        item
                      });
                }}
              />
              <p>{item}</p>
            </li>
          ))}
        </div>
        {newPlaylistRoute ? (
          <div className="playlist__new__playlist">
            <input
              type="text"
              ref={inputRef}
              name="playlist"
              id=""
              placeholder="Playlist name"
              required
              maxLength="20"
              onChange={(e) => setNewPlaylistText(e.target.value)}
            />
            <button
              className="playlist-btn"
              onClick={() => {
                {
                  inputRef.current.value = "";
                  return newPlaylistText === ""
                    ? null
                    : playlistDispatch({
                        type: "ADD_NEW_PLAYLIST",
                        payload: newPlaylistText
                      });
                }
              }}
            >
              Create
            </button>
          </div>
        ) : (
          <div
            className="playlist__card__bottom"
            onClick={() => setNewPlaylistRoute((route) => !route)}
          >
            {/* <FontAwesomeIcon icon={faPlus} /> */}
            <p>create new playlist</p>
          </div>
        )}
      </div>
    </>
  );
};

export default  PlaylistAdd;