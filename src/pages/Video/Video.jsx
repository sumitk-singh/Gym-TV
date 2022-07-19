import './Video.css';
import VideoCard from '../../components/Card/VideoCard/VideoCard.jsx';



import { useParams } from "react-router-dom";
import { usePlaylist } from "../../contexts/playlistContext";
import { useState } from "react";
import YouTube from "react-youtube";





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
    width: "853",
    playerVars: {
      autoplay: 1
    }
  };


  window.onresize = () => {
    setSizeOfWindow(window.innerWidth);
  };

 

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
                            
                            onClick={() =>
                                playlistDispatch({
                                  type: "ADD_TO_LIKEDVIDEOS",
                                  payload: { video }
                                })
                              }
                            >
                            </i>
                            Like
                        </span>{" "}
                        <span>
                            <i className="fa fa-thumbs-down" />
                            Dislike
                        </span>{" "}
                        <span>
                            <i className="fa fa-heart"  
                            onClick={() =>
                                playlistDispatch({
                                  type: "ADD_TO_WATCHLATER",
                                  payload: { video }
                                })
                              }
                            >
                            </i> Add To Watch Later
                        </span>{" "}
                        <span>
                            <i className="fa fa-th-list" aria-hidden="true" /> Add To Playlist
                        </span>{" "}
                        <span className="text-float-right">12k View | 2hr ago</span>
                    </p>
                    <h4 id='text-left-side'>Description </h4>
                    <h3 id='text-left-side'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, et. Molestias, dignissimos! Omnis ipsam cupiditate incidunt laudantium ipsum doloribus exercitationem necessitatibus non, consectetur, aliquid id, officiis explicabo? Adipisci, maiores quaerat!
                    </h3>
                </section>




                {/* end of section-1 */}
                {/* section-2 */}
                <section className="video-page-section-2">
                    <h3 id='text-left-side'>Must Watch</h3>

                    {
                        videoData.map((video) => {
                            return <VideoCard id={video.id} thumbnail={video.image} title={video.title} views={video.views} xDaysAgo={video.date} video = {video} type= {"ADD_TO_WATCHLATER"} />
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