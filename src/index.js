import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import PlaylistProvider from './contexts/playlistContext';
import { AuthProvider } from './contexts/Authcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));

// running server
makeServer();

root.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
    <PlaylistProvider> 
      <App />
    </PlaylistProvider>
    </AuthProvider>
    </Router>
  </React.StrictMode>
);

