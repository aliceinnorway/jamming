import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [{name: 'name1', artist: 'artist1', album: 'album1', id: '1'},
            {name: 'name2', artist: 'artist2', album: 'album2', id: '2'},
            {name: 'name3', artist: 'artist3', album: 'album3', id: '3'}],
            playlistName: ['My Playlist'],
            playlistTracks: [{name: 'PlaylistName1', artist: 'PlaylistArtist1', album: 'PlaylistAlbum1', id: '4'},
            {name: 'PlaylistName2', artist: 'PlaylistArtist2', album: 'PlaylistAlbum2', id: '5'},
            {name: 'PlaylistName3', artist: 'PlaylistArtist', album: 'PlaylistAlbum3', id: '6'}]
        };
        this.addTrack = this.addTrack.bind(this);
        console.log(this.props);
    }

    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
          } else {
              this.state.playlistTracks.push(track);
          }

        this.setState({playlistTracks: this.state.playlistTracks})
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} 
                                        onAdd={this.addTrack}/>
                        <Playlist   playlistName={this.state.playlistName}
                                    playlistTracks={this.state.playlistTracks} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
