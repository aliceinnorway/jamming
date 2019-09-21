import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

import Spotify from '../../util/Spotify';

class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            playlistName: 'My Playlist',
            playlistTracks: []
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
        console.log(this.props);
    }

    //The following methods allow the user to edit the playlist. //

    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
          } else {
              this.state.playlistTracks.push(track);
          }

        this.setState({playlistTracks: this.state.playlistTracks})
    }

    removeTrack(track) {
        this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id);

        this.setState({playlistTracks: this.state.playlistTracks})

    }

    updatePlaylistName(name) {
        this.setState({ playlistName: name });
    }

    // The following method allows the user to save the playlist to Spotify //

    savePlaylist() {
        const trackUris = this.state.playlistTracks.map(track => track.uri);
        Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
            this.setState({
                playlistName: 'New Playlist',
                playlistTracks: []
            })
        })
    }

    // The following method hooks the search results list to Spotify's API //

    search(term) {
        Spotify.search(term).then(searchResults => {
            this.setState({searchResults: searchResults})
        })
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search} />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} 
                                        onAdd={this.addTrack}/>
                        <Playlist   playlistName={this.state.playlistName}
                                    playlistTracks={this.state.playlistTracks}
                                    onRemove={this.state.removeTrack}
                                    onNameChange={this.state.updatePlaylistName}
                                    onSave={this.state.savePlaylist} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
