import React, { useState } from "react";

import "./profileContainer.scss";

// Components;
import ProfilePicture from "./profilePicture/ProfilePicture";
import ProfileDetails from "./profileDetails/ProfileDetails";
import ProfileNumbers from "./profileNumbers/ProfileNumbers";
import Modal from "../modal/Modal";

const ProfileContainer = ({ userData }) => {

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  }

  return (
    <div className="profile-container">
      {userData.name ? (
        <React.Fragment>
          <div className="profile-container-content">
            <div className="profile-container-content-picture" onClick={handleModal}>
              <ProfilePicture
                url={userData?.avatar_url}
                alt={userData.login}
              />
            </div>
            <div className="profile-container-content-details">
              <ProfileDetails
                name={userData?.name}
                username={userData.login}
                bio={userData?.bio}
              />
            </div>
            <div className="profile-container-content-numbers">
              <ProfileNumbers
                repos={userData.public_repos}
                followers={userData.followers}
                following={userData.following}
              />
            </div>
            <div className="profile-container-content-modal">
              <Modal userData={userData} showModal={showModal} setShowModal={setShowModal} />
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default ProfileContainer;
