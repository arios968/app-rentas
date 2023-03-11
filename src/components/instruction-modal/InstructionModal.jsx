import React from "react";
import Modal from "react-modal";
import { setInstructions } from "../../utils/modal";
import { Register, Post, Types, Search } from "./components";
import { modalStyles } from ".";

export const InstructionModal = ({
  showModal,
  toggleModal,
  setAuthModal,
  currentInstruction,
}) => {
  const goToRegister = () => {
    setAuthModal("register");
    toggleModal("auth");
  };

  const openAuthModal = (modal) => {
    setAuthModal(modal);
    toggleModal("auth");
  };

  const component = {
    register: (
      <Register
        toggleModal={toggleModal}
        goToRegister={goToRegister}
        openAuthModal={openAuthModal}
      />
    ),
    post: <Post toggleModal={toggleModal} />,
    types: <Types toggleModal={toggleModal} />,
    search: <Search toggleModal={toggleModal} />,
  };

  return (
    <Modal isOpen={showModal} style={modalStyles}>
      <div className="p-4 text-center relative">
        {component[currentInstruction]}
      </div>
    </Modal>
  );
};
