import './Video.css';
import VideoCard from '../../components/Card/VideoCard/VideoCard.jsx';

import { useParams } from "react-router-dom";
import { usePlaylist } from "../../contexts/playlistContext";
import { useState } from "react";
import YouTube from "react-youtube";

// toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//-----

const Video = () => {
  const [sizeOfWindow, setSizeOfWindow] = useState(window.innerWidth);
  const { playlistDispatch, videoData } = usePlaylist();
  const { videoId } = useParams();


  function getVideoDetails(videos, videoId) {
    return videos.find((video) => video.id === videoId);
  }


  const video = getVideoDetails(videoData, videoId);


  const opts = {
    height: sizeOfWindow > 900 ? "550" : "300",
    width: "100%",
    playerVars: {
      autoplay: 0
    }
  };


  window.onresize = () => {
    setSizeOfWindow(window.innerWidth);
  };

  const notifyForPlaylist = () => toast("Added to playlist");
  const notifyForWatchLater = () => toast("Added to watch later");
  const notifyForLike = () => toast("You liked it");
  const notifyForDislike = () => toast("You disliked it");

  return (
    <>
      {/* main section */}

      <section className="video-page-main-section">
        {/* section-1 */}


        <section className="video-page-section-1">
          <h3 id='text-left-side'>{video.title}</h3>

          <YouTube
            videoId={`${videoId}`}
            opts={opts}
            onPlay={() =>
              playlistDispatch({
                type: "ADD_TO_HISTORY",
                payload: { video }
              })
            }
          />

          <p id='text-left-side' className="text-below-video">
            <span>
              <i className="fa fa-thumbs-up"

                onClick={() =>{
                  playlistDispatch({
                    type: "ADD_TO_LIKEDVIDEOS",
                    payload: { video }
                  });
                  notifyForLike();
                }
              }
              >
              </i>
              
            </span>{" "}
            <span>
              <i className="fa fa-thumbs-down" onClick={()=>notifyForDislike()}> 
              </i>
            </span>{" "}
            <span>
              <i className="fa fa-heart"
                onClick={() =>{
                  playlistDispatch({
                    type: "ADD_TO_WATCHLATER",
                    payload: { video }
                  });
                  notifyForWatchLater();
                
                }
                }
              >
              </i> Add To Watch Later
            </span>{" "}
            <span>
              <i className="fa fa-th-list"



//---
                onClick={() =>{
                  playlistDispatch({
                    type: "ADD_VIDEO_TO_PLAYLIST",
                    payload: { video }
                  });
                  notifyForPlaylist();

                }
              
              }
              ></i> Add To Playlist
            </span>{" "}
            
          </p>
          <hr />
          <h3 id='text-left-side'>Must watch </h3>

        </section>




        {/* end of section-1 */}
        {/* section-2 */}

        <section className="video-page-section-2">

          {
            videoData.map((video) => {
              return <VideoCard id={video.id} thumbnail={video.image} title={video.title} views={video.views} xDaysAgo={video.date} video={video} type={"ADD_TO_WATCHLATER"} />
            })
          }

        </section>
        {/* end of section-2 */}
      </section>
      {/* end of main section */}
    </>
  )
}

export default Video;