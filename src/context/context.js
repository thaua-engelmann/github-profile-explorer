import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = ({children}) => {

    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [followings, setFollowings] = useState([]);

        return (
        <context.Provider value={{
            userData,
            setUserData,
            repos,
            setRepos,
            followers,
            setFollowers,
            followings,
            setFollowings
        }}>
            {children}
        </context.Provider>
    )
}
