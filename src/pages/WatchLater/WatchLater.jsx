import './WatchLater.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import VideoRemoveCard from '../../components/Card/VideoCard/VideoRemoveCard';
import { usePlaylist } from "../../contexts/playlistContext";


const WatchLater = () => {

  const { watchLater } = usePlaylist();

    return (
        <>
            <div className='main-container-watch-later-page'>

                <section className='section-a'>
                    <Sidebar />
                </section>

                <section className='section-b'>
                    <h2>Watch Later</h2>
                    <section className='watch-later-section-1'>
                    {
                            watchLater.map((video, i) => {
                                return <VideoRemoveCard id={video.id} thumbnail={video.image} title={video.title} views={video.views} xDaysAgo={video.date}  video={video} type= {"REMOVE_FROM_WATCHLATER"}/>
                            })
                        }
                    </section>
                </section>
            </div>
        </>
    )
}


export default WatchLater;