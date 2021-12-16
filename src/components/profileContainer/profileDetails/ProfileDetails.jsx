import React from 'react';

const ProfileDetails = ({name, username, bio}) => {
    return (
        <>
            <h1 className="profile-name">{name}</h1>
            <h3 className="profile-username">#{username}</h3>
            <p className="profile-description">{bio}</p>
        </>
    )
}

export default ProfileDetails;
