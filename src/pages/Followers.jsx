import React, { useContext } from 'react'

// Context;
import {context} from '../context/context';

// Components;
import FollowersContainer from '../components/followersContainer/FollowersContainer';

const Followers = () => {

    const ctx = useContext(context);

    return (
        <div id="followers" className="followers">
            <FollowersContainer userData={ctx.userData} followers={ctx.followers} />
        </div>
    )
}

export default Followers;
