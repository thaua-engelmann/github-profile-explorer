import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = ({children}) => {

    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState([]);

        return (
        <context.Provider value={{
            userData,
            setUserData,
            repos,
            setRepos
        }}>
            {children}
        </context.Provider>
    )
}
