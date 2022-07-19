import './VideoCard.css';
import { Link } from "react-router-dom";
import { usePlaylist } from "../../../contexts/playlistContext";

const VideoRemoveCard = ({ title, id, xDaysAgo, views, thumbnail, type, video}) => {
 
    const { playlistDispatch } = usePlaylist();
    
    const check = ()=>{
        console.log("video");
    }
   
    return (

        <>
        
            <div className="video-card" key={id}>
                <img src={thumbnail} alt="" />
                <div className="card-text">
                    <h3>{title}</h3>
                    <p>{views} views | {xDaysAgo} days ago</p>
                </div>
                <div id='video-card-btn'>

                   <Link
               
              to={`/video/${id}`}
              key={id}
            > 
                  <button id="btn-primary" style={{
                  width: "18vh"
                }} ><i class="fa fa-play-circle" ></i>
                   Watch Now</button>
                 </Link> 
                    <button id="btn-secondary" 
                    onClick={() =>
                        playlistDispatch({
                          type: type,
                          payload: { video }
                        })
                      }
                    ><i class="fa fa-trash"
                    
                    ></i> Remove</button>
                </div>
            </div>


        </>

    )
}

export default VideoRemoveCard;