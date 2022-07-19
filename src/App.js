import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Home, Explore, Video, WatchLater, History, LikedVideos, MyPlaylist } from './pages/index.js';
import { Login, SignUp } from '../src/pages/Auth/index.js';

import { RequiresAuth } from "./RequiresAuth";
import Mockman from "mockman-js";

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
       
        

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />


        {/* setup private path*/}

        <Route
          path="//video/:videoId"
          element={
            <RequiresAuth>
              <Video />
            </RequiresAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />

        <Route
          path="/likedvideo"
          element={
            <RequiresAuth>
              <LikedVideos />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />

        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />

        <Route
          path="/myplaylist"
          element={
            <RequiresAuth>
              <MyPlaylist />
            </RequiresAuth>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
