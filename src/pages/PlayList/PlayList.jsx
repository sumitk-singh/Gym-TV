import './PlayList.css';
// import VideoCard from '../../components/Card/VideoCard/VideoCard.jsx';
import VideoRemoveCard from '../../components/Card/VideoCard/VideoRemoveCard';
import Sidebar from '../../components/Sidebar/Sidebar';
import { usePlaylist } from '../../contexts/playlistContext';

const PlayList = () => {
    const { playlist } = usePlaylist();
    return (
        <>
            <div className='main-container-myplaylist-page'>

                <section className='section-a'>
                    <Sidebar />
                </section>

                <section className='section-b'>
                    <h2>Playlists</h2>

                    <section className='playlist-page-section-1'>
                    {
                            playlist.map((video,i) => {
                                return <VideoRemoveCard id={video.id} thumbnail={video.image} title={video.title} video={video} type={ "REMOVE_FROM_PLAYLIST"}/>
                            })
                        }
                    </section>

                </section>
            </div>
        </>
    )
}

export default PlayList;