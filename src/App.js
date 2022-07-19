import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Home,Explore, Video, WatchLater} from './pages/index.js';
import { Login, SignUp } from '../src/pages/Auth/index.js';



function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path='/testing' element={<Video />} />
        <Route path="/video/:videoId" element={<Video />} />
       
        <Route path='/watchlater' element={<WatchLater />} />
    
        </Routes>
   
      <Footer />
    </div>
  );
}

export default App;
