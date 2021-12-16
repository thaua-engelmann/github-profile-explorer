import React from "react";
import "./modal.scss";

// Animate.css;
import "animate.css";

import { FaTimes as CloseModal } from "react-icons/fa";

const Modal = ({ userData, showModal, setShowModal }) => {
  const closeModalHandler = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setShowModal(false);
    }
  };

  return (
    <div
      className={showModal ? "modal-overlay show" : "modal-overlay"}
      onClick={closeModalHandler}
    >
      <div className="modal-overlay-box">
        <img src={userData?.avatar_url} alt={userData.login} />
        <button
          className="modal-overlay-box-close"
          onClick={() => setShowModal(false)}
        >
          <CloseModal />
        </button>
      </div>
    </div>
  );
};

export default Modal;
