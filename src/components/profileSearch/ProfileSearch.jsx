import React, { useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./profileSearch.scss";

// React-Icons;
import { BsSearch as SearchIcon } from "react-icons/bs";

// Toastify;
import { ToastContainer, toast } from "react-toastify";

// Axios => baseURL;
import github from "../../services/github";

// Context;
import { context } from "../../context/context";

const ProfileSearch = () => {
  const [profile, setProfile] = useState("");

  const ctx = useContext(context);

  async function getUserData() {
    try {
      const response = await github.get(`/${profile}`);
      const repos = await github.get(`/${profile}/repos`);
      const followers = await github.get(`/${profile}/followers`);
      const followings = await github.get(`/${profile}/following`);

      ctx.setUserData(response.data);
      ctx.setRepos(repos.data);
      ctx.setFollowers(followers.data);
      ctx.setFollowings(followings.data);

      setProfile("");
    } catch (err) {
      toast.error("Username was not found!");
      console.error(err);
    }
  }

  const enterKeyHandler = (e) => {
    if (e.key === "Enter") {
      console.log("Enter was clicked!");
      getUserData();
    }
  };

  return (
    <div className="profile-search">
      <div className="profile-search-content">
        <div className="profile-search-content-title">
          <h1>Github Profile Explorer</h1>
        </div>
        <div className="profile-search-content-input">
          <input
            type="text"
            placeholder={
              ctx.userData.name ? "Search a new one?" : "Enter an username..."
            }
            required
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            onKeyDown={enterKeyHandler}
          />
          <div className="icon" onClick={getUserData}>
            <SearchIcon size="2rem" />
          </div>
        </div>
      </div>
      {<ToastContainer toastClassName="toastify" />}
    </div>
  );
};

export default ProfileSearch;
