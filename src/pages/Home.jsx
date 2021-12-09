import React from 'react';

import ProfileSearch from '../components/profileSearch/ProfileSearch';
import ProfileContainer from '../components/profileContainer/ProfileContainer';

const Home = () => {
    return (
        <div id="home" className="home">
            <ProfileSearch />
            <ProfileContainer />
        </div>
    )
}

export default Home;
