import './MyPlaylist.css';
import VideoCard from '../../components/Card/VideoCard/VideoCard.jsx';
import Sidebar from '../../components/Sidebar/Sidebar';

const MyPlaylist = () => {
    return (
        <>
            <div className='main-container-myplaylist-page'>

                <section className='section-a'>
                    <Sidebar />
                </section>

                <section className='section-b'>
                    <h2>My Playlists 1<span className='float-right'><button>Delete this playlist</button></span></h2>

                    <section className='myplaylist-page-section-1'>
                        <VideoCard />
                    </section>

                </section>
            </div>
        </>
    )
}

export default MyPlaylist;