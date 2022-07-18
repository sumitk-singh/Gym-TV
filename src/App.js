
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Home,Explore, Video, WatchLater, History,LikedVideos,MyPlaylist , PlaylistListing, CreateNewPlaylist} from './pages/index.js';
import { Login, SignUp } from '../src/pages/Auth/index.js';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/testing' element={<Video />} />
        <Route path='/explore' element={<Explore />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path='/watchlater' element={<WatchLater />} />
        <Route path='/history' element={<History />} />
        <Route path='/playlistlisting' element={<PlaylistListing />} />
        <Route path='/likedvideo' element={<LikedVideos />} />
        <Route path='/myplaylist' element={<MyPlaylist />} />
        <Route path='/createnewplaylist' element={<CreateNewPlaylist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
     

      <Footer />
    </div>
  );
}

export default App;
