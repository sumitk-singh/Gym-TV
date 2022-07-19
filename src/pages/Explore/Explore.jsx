import './Explore.css';
import VideoCard from '../../components/Card/VideoCard/VideoCard.jsx';
import Sidebar from '../../components/Sidebar/Sidebar';

import { usePlaylist } from "../../contexts/playlistContext";

const Explore = () => {
    
    const { videoData } = usePlaylist();

    return (
        <>

            <div className='main-container-explore-page'>

                <section className='section-a'>
                    <Sidebar />
                </section>

                <section className='section-b' >


                    <h2>Trending Videos</h2>
                    <div className='videoListing-page-container'>
                        {
                            videoData.map((video, i) => {
                                return <VideoCard id={video.id} thumbnail={video.image} title={video.title} views={video.views} xDaysAgo={video.date} video = {video} type= {"ADD_TO_WATCHLATER"} />
                            })
                        }

                    </div>

                </section>
            </div>
        </>
    )
}

export default Explore;