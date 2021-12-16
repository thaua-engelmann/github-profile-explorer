import React from 'react';
import './closeContainerButton.scss';
import {useNavigate} from "react-router-dom";

// React-icons;
import { TiTimes } from "react-icons/ti";

const CloseContainerButton = () => {

    const navigate = useNavigate();

    const backHome = () => {
        navigate(-1);
    }

    return (
        <div className="close-container" onClick={backHome}>
            <button className="close-container-btn">
                <TiTimes />
            </button>
        </div>
    )
}

export default CloseContainerButton;
