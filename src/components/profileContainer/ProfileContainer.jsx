import React, { useContext } from "react";

import "./profileContainer.scss";

// Components;
import ProfilePicture from "./profilePicture/ProfilePicture";
import ProfileDetails from "./profileDetails/ProfileDetails";
import ProfileNumbers from "./profileNumbers/ProfileNumbers";

// Context;
import { context } from "../../context/context";

const ProfileContainer = (props) => {
  const ctx = useContext(context);

  return (
    <div className="profile-container">
      {ctx.userData.name ? (
        <React.Fragment>
          <div className="profile-container-content">
            <div className="profile-container-content-picture">
              <ProfilePicture
                url={ctx.userData?.avatar_url}
                alt={ctx.userData.login}
              />
            </div>
            <div className="profile-container-content-details">
              <ProfileDetails
                name={ctx.userData?.name}
                username={ctx.userData.login}
                bio={ctx.userData?.bio}
              />
            </div>
            <div className="profile-container-content-numbers">
              <ProfileNumbers
                repos={ctx.userData.public_repos}
                followers={ctx.userData.followers}
                following={ctx.userData.following}
              />
            </div>
          </div>
        </React.Fragment>
      ) : (
        null
      )}
    </div>
  );
};

export default ProfileContainer;
