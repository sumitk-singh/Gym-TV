import './VideoCard.css';
import { Link } from "react-router-dom";
import { usePlaylist } from "../../../contexts/playlistContext";

import React from 'react';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//-----

const Card = ({ title, id, thumbnail, type, video }) => {

  const notify = () => toast("Saved to watch Later");

  const { playlistDispatch } = usePlaylist();

  const playlistDispatchAndToastHandler = () => {
    playlistDispatch({
      type: type,
      payload: { video }
    });

    notify();
  }

  return (

    <>
      <div className="video-card" key={id}>
        <img src={thumbnail} alt="" />
        <div className="card-text">
          <h3>{title}</h3>

        </div>
        <div id='video-card-btn'>
          <Link
            to={`/video/${id}`}
            key={id}
          >
            <button id="btn-primary" style={{
              width: "18vh"
            }}><i class="fa fa-play-circle" ></i>
              Watch Now</button>
          </Link>
          <button id="btn-secondary"
            onClick={
              () => {
                playlistDispatchAndToastHandler()
              }
            }

          ><i class="fa fa-clock" ></i> Save For Later</button>

         
        </div>
        <ToastContainer />
      </div>
    </>

  )
}

export default Card;