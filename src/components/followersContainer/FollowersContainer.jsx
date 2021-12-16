import React from "react";
import "./followersContainer.scss";

// React-icons;
import { CgProfile } from "react-icons/cg";

// Components;
import CloseContainerButton from "../closeContainerButton/CloseContainerButton";
import ExitRouteButton from '../exitRouteButton/ExitRouteButton';

const FollowersContainer = ({ userData, followers }) => {
  return (
    <>
      {userData.login ? (
        <div className="followers-container route">
          <div className="followers-container-content">
            <div className="followers-container-content-title route-title">
              <h1>
                Followers of <span>#{userData.login}</span>
              </h1>
            </div>
            <ul className="followers-container-content-list route-list">
              {followers?.map((follower) => (
                <li className="follower" key={follower.id}>
                  <img
                    src={follower.avatar_url}
                    alt={follower.login}
                    className="follower-picture"
                  />
                  <h3 className="follower-name">#{follower.login}</h3>
                  <div className="follower-icon">
                    <CgProfile />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <CloseContainerButton />
        </div>
      ) : (
        <ExitRouteButton />
      )}
    </>
  );
};

export default FollowersContainer;
