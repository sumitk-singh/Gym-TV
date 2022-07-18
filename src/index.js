import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom";
import PlaylistProvider from './contexts/playlistContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PlaylistProvider>
       <Router>
      <App />
    </Router>
    </PlaylistProvider>
  </React.StrictMode>
);

