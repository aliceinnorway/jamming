import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js';
import SearchResults from './Components/SearchResults/SearchResults.js';
import Playlist from './Components/Playlist/Playlist.js';

function App() {
  return (
      <div>
          <h1>Ja<span className={highlight}>mmm</span>ing</h1>
          <div className={app}>
              {/*Add a SearchBar component */}
              <div className={appPlaylist}>
                  {/*Add a SearchResults component*/}
                  {/*Add a Playlist component*/}
              </div>
          </div>
      </div>
  );
}

export default App;
