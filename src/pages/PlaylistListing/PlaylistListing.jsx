import './PlaylistListing.css';
import PlaylistCard from '../../components/Card/PlaylistCard/PlaylistCard';
import Sidebar from '../../components/Sidebar/Sidebar';

const PlaylistListing = () => {
    return (
        <>
            <div className='main-container-playlistlisting'>

                <section className='section-a'>
                    <Sidebar />
                </section>
                <section className='section-b'>

                    <h2>My Playlists<span className='float-right'><button>Create New Playlist</button></span></h2>
                    <section className='playlist-page-section-1'>
                        <PlaylistCard />
                    </section>

                </section>
            </div>
        </>
    )
}

export default PlaylistListing;