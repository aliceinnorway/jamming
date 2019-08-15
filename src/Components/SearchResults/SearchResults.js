import React from './React';
import TrackList from './Component/TrackList/TrackList.js';
import './searchresults.css';

class SearchResults extends React.Component {
    render() {
        return (
            <div className={SearchResults}>
                <h2>Results</h2>
                {/*Add a TrackList component*/}
            </div>
        );
    }
}

export default SearchResults;