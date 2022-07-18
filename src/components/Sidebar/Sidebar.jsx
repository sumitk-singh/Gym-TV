import './Sidebar.css';
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <>
            <aside id='sidebar' className='sidebar-container'>

                <button id="btn-sidebar" onClick={() => { navigate('/') }}><i class="fa fa-home" ></i> Home</button>
                <button id="btn-sidebar" onClick={() => { navigate('/explore') }}><i class="fa fa-search" ></i> Explore</button>
                <button id="btn-sidebar" onClick={() => { navigate('/playlistlisting') }}><i class="fa fa-list" ></i> Playlist</button>
                <button id="btn-sidebar" onClick={() => { navigate('/likedvideo') }}><i class="fa fa-thumbs-up" ></i> Liked Video</button>
                <button id="btn-sidebar" onClick={() => { navigate('/watchlater') }}><i class="fa fa-clock"></i> Watch Later</button>
                <button id="btn-sidebar" onClick={() => { navigate('/history') }}><i class="fa fa-history"></i> History</button>
            </aside>
        </>
    )
}

export default Sidebar;