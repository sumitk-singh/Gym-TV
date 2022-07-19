import './History.css';
import VideoRemoveCard from '../../components/Card/VideoCard/VideoRemoveCard';
import Sidebar from '../../components/Sidebar/Sidebar';

import { usePlaylist } from "../../contexts/playlistContext";


const History = () => {

  const { history} = usePlaylist();

    return (
        <>
            <div className='main-container-history-page'>

                <section className='section-a'>
                    <Sidebar />
                </section>

                <section className='section-b'>
                    
                    <h2>History <span className='float-right'><button>Clear Full History</button></span></h2>
                    
                    <section className='history-page-section-1'>
                        
                    {
                            history.map((video) => {
                                return <VideoRemoveCard id={video.id} thumbnail={video.image} title={video.title} views={video.views} xDaysAgo={video.date} video={video} type={ "REMOVE_FROM_HISTORY"}/>
                            })
                        }

                    </section>
                </section>
            </div>
        </>
    )
}


export default History;