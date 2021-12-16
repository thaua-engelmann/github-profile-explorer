import React, { useContext } from 'react';

// Context;
import { context } from "../context/context";

// Components;
import FollowingContainer from "../components/followingContainer/FollowingContainer";

const Following = () => {

    const ctx = useContext(context);

    return (
        <div id="followingContainer" className="followingContainer">
            <FollowingContainer userData={ctx.userData} followings={ctx.followings} />
        </div>
    )
}

export default Following;
