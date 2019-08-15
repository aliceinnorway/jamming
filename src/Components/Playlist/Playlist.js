import React from './React';
import './Playlist.css'; 
import TrackList from './Component/TrackList/TrackList.js';

class Playlist extends React.Component {
    render() {
        return (
            <div className={Playlist}>
                    <input defaultValue={'New Playlist'}/>
                    {/*Add a TrackList component*/}
                    <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
};

export default Playlist;