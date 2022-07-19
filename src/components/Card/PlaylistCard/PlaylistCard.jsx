import './PlaylistCard.css';

const PlaylistCard = () => {
    return (
        <>
            <div className='playlist-card-main-container'>
                <div className='playlist-card-container-1'>
                    <h3>My Playlist 1</h3>
                    <p>10 Videos</p>
                </div>
                <div className='playlist-card-container-2'>
                    <button><i class="fa fa-trash" ></i></button>
                </div>
            </div>

        </>
    )
}

export default PlaylistCard;