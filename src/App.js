import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Home, Explore, Video, LikedVideos, MyPlaylist } from './pages/index.js';
import { Login, SignUp } from '../src/pages/Auth/index.js';


import Mockman from "mockman-js";

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path='/video' element={<Video />} />
        <Route path='/explore' element={<Explore />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/likedvideo" element={<LikedVideos />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
