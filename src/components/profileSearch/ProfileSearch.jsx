import React, { useState, useContext } from "react";
import "./profileSearch.scss";

// React-Icons;
import { BsSearch as SearchIcon } from "react-icons/bs";

// Axios => baseURL;
import github from "../../services/github";

// Context;
import {context} from '../../context/context';

const ProfileSearch = () => {
  const [profile, setProfile] = useState("");
  const [error, setError] = useState(false);

  const ctx = useContext(context);

  async function getUserData() {
    try {
      const response = await github.get(`/${profile}`);
      const repos = await github.get(`/${profile}/repos`);
      
      ctx.setUserData(response.data);
      ctx.setRepos(repos.data);
      
      setError(false);
      
    } catch (err) {
      setError(true);
      console.error(err);
    }
  }

  const enterKeyHandler = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter was clicked!');
      getUserData();
    }
  }

  return (
    <div className="profile-search">
      <div className="profile-search-content">
        <div className="profile-search-content-title">
          <h1>Github Profile Explorer</h1>
        </div>
        <div className="profile-search-content-input">
          <input
            type="text"
            placeholder="Enter an username..."
            required
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            onKeyDown={enterKeyHandler}
          />
          {error ? <p>Something went wrong</p> : ''}
          <div className="icon" onClick={getUserData}>
            <SearchIcon size="2rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSearch;
