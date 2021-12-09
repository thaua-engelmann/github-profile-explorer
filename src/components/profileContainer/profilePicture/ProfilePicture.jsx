import React from 'react';

const ProfilePicture = (props) => {

    return (
        <img src={props?.url} alt={props?.alt} />
    )
}

export default ProfilePicture;