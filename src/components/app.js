import React from 'react';

import SearchBar from '../containers/searchBar';
import ProfileList from '../containers/profileList';

const App = () => {
    return (
        <div className="ui container" style={{marginTop:10}}>
            <SearchBar  />
            <ProfileList />
        </div>
    );
}

export default App;