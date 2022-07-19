import { createContext, useContext, useReducer } from "react";
import { videoData } from "../backend/db/videoData";

// Creating context
const playlistContext = createContext();



function addVideoToPlaylist(state, action) {


  
  let newPlaylist = [...state.playlist];
  const isPresent = state.playlist.some(
    (playlist) => playlist.id === action.payload.video.id
  );
  if (isPresent) {
    newPlaylist = newPlaylist.map((video) => {
      if (video.id === action.payload.video.id) {
        const videoWithIncreased = { ...video };
        videoWithIncreased.qty += 1;
        return videoWithIncreased;
      }
      return video;
    });
    return newPlaylist;
  } else {
    return [...state.playlist, { ...action.payload.video, qty: 1 }];
  }
}

// Add to like page

function addToLikedVideos(state, action) {
  let newLikedVideos = [...state.likedVideos];
  const isPresent = state.likedVideos.some(
    (video) => video.id === action.payload.video.id
  );
  if (isPresent) {
    newLikedVideos = newLikedVideos.map((video) => {
      if (video.id === action.payload.video.id) {
        const videoWithIncreased = { ...video };
        videoWithIncreased.qty += 1;
        return videoWithIncreased;
      }
      return video;
    });
    return newLikedVideos;
  } else {
    return [...state.likedVideos, { ...action.payload.video, qty: 1 }];
  }
}

// Add to watch later 

function addToWatchLater(state, action) {
  let newWatchLaterVideo = [...state.watchLater];
  const isPresent = state.watchLater.some(
    (video) => video.id === action.payload.video.id
  );
  if (isPresent) {
    newWatchLaterVideo = newWatchLaterVideo.map((video) => {
      if (video.id === action.payload.video.id) {
        const videoWithIncreased = { ...video };
        videoWithIncreased.qty += 1;
        return videoWithIncreased;
      }
      return video;
    });
    return newWatchLaterVideo;
  } else {
    return [...state.watchLater, { ...action.payload.video, qty: 1 }];
  }
}

// Add to History

function addToHistory(state, action) {
  let newAddToHistory = [...state.history];
  const isPresent = state.history.some(
    (video) => video.id === action.payload.video.id
  );
  if (isPresent) {
    return (newAddToHistory = newAddToHistory.map((video) => {
      if (video.id === action.payload.video.id) {
        const videoWithIncreased = { ...video };
        videoWithIncreased.qty += 1;
        // return videoWithIncreased;
      }
      return video;
    }));
  } else {
    return [...state.history, { ...action.payload.video, qty: 1 }];
  }
}
export const data = {
  playlist: [],
  watchLater: [],
  likedVideos: [],
  history: []
};


// Reducer function

export default function PlaylistProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD_NEW_PLAYLIST":
        return {
          ...state,
          playList: { ...state.playList, [action.payload]: [] }
        };
      case "ADD_VIDEO_TO_PLAYLIST":
        return {
          ...state,
          playlist: addVideoToPlaylist(state, action)
        };
      case "ADD_TO_LIKEDVIDEOS":
        return {
          ...state,
          likedVideos: addToLikedVideos(state, action)
        };
      case "ADD_TO_WATCHLATER":
        return {
          ...state,
          watchLater: addToWatchLater(state, action)
        };
      case "ADD_TO_HISTORY":
        return {
          ...state,
          history: addToHistory(state, action)
        };
      case "REMOVE_FROM_HISTORY":
        return {
          ...state,
          history: state.history.filter(
            (video) => video.id !== action.payload.video.id
          )
        };
      case "REMOVE_FROM_PLAYLIST":
        return {
          ...state,
          playlist: state.playlist.filter(
            (video) => video.id !== action.payload.video.id
          )
        };
      case "REMOVE_FROM_LIKEDVIDEOS":
        return {
          ...state,
          likedVideos: state.likedVideos.filter(
            (video) => video.id !== action.payload.video.id
          )
        };
      case "REMOVE_FROM_WATCHLATER":
        return {
          ...state,
          watchLater: state.watchLater.filter(
            (video) => video.id !== action.payload.video.id
          )
        };
      default:
        return state;
    }
  }
  const [{ playlist, watchLater, likedVideos, history }, dispatch] = useReducer(
    reducer,
    data
  );
  return (
    <playlistContext.Provider
      value={{
        playlistDispatch: dispatch,
        playlist,
        watchLater,
        likedVideos,
        history,
        videoData
      }}
    >
      {children}
    </playlistContext.Provider>
  );
}
export const usePlaylist = () => useContext(playlistContext);
