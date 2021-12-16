import React, { useContext } from 'react';

// Context;
import { context } from "../context/context";

import ProfileSearch from '../components/profileSearch/ProfileSearch';
import ProfileContainer from '../components/profileContainer/ProfileContainer';

const Home = () => {

    const ctx = useContext(context);

    return (
        <div id="home" className="home">
            <ProfileSearch />
            <ProfileContainer userData={ctx.userData} />
        </div>
    )
}

export default Home;
