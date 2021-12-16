import React from "react";
import "./followingContainer.scss";

import CloseContainerButton from "../closeContainerButton/CloseContainerButton";
import ExitRouteButton from "../exitRouteButton/ExitRouteButton";

// React-icons;
import { CgProfile } from "react-icons/cg";

const FollowingContainer = ({ userData, followings }) => {
  return (
    <>
      {userData.login ? (
        <div className="following-container route">
          <div className="following-container-content">
            <div className="following-container-content-title route-title">
              <h1>
                <span>#{userData.login} </span>is following:
              </h1>
            </div>
            <ul className="following-container-content-list route-list ">
              {followings?.map((following) => (
                <li className="following" key={following.id}>
                  <img
                    src={following?.avatar_url}
                    alt={following.login}
                    className="following-picture"
                  />
                  <h3 className="following-name">#{following.login}</h3>
                  <div className="following-icon">
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

export default FollowingContainer;
