import './LikedVideo.css';

import VideoRemoveCard from '../../components/Card/VideoCard/VideoRemoveCard';
import Sidebar from '../../components/Sidebar/Sidebar';

import { usePlaylist } from "../../contexts/playlistContext";


const LikedVideos = () => {

    const { likedVideos} = usePlaylist();

    return (
        <>
            <div className='main-container-liked-video'>

                <section className='section-a'>
                    <Sidebar />
                </section>

                <section className='section-b'>
                    <h2>Liked Video</h2>
                    <section className='liked-video-section-1'>
                    {
                            likedVideos.map((video, i) => {
                                return <VideoRemoveCard id={video.id} thumbnail={video.image} title={video.title} views={video.views} xDaysAgo={video.date} video={video} type={ "REMOVE_FROM_LIKEDVIDEOS"}/>
                            })
                        }
                    </section>
                </section>
            </div>
        </>
    )
}






export default LikedVideos;