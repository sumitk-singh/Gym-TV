import './VideoCategoryCard.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="video-card">
                <img src={props.thumbnail} alt="" />
                <div className="card-text">
                    <h3>{props.title}</h3>
                </div>
                <div id='video-card-btn'>
                   <Link to="/explore" style={{width:"100%"}}> <button  className="btn-primary"><i class="fa fa-play-circle" ></i> Explore</button></Link>
                </div>
            </div>
        </>
    )
}

export default Card;