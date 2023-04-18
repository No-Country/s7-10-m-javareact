import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import User from "../../assets/icon-user.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const ButtonWithModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>
        <FaUserCircle className="text-[#004E98]/70 hover:text-[#004E98] w-11 h-11 -mr-1" />
      </Button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <div className="flex h-full flex-col items-center justify-center px-4  sm:px-6 lg:px-8 ">
            <h1 className="font-semibold text-xl mb-3 text-[#004E98]">Welcome!</h1>
            <p className="text-sm mb-3">Would you like to...</p>
            <Link
              to="/onboarding/client"
              onClick={() => closeModal()}
              className="text-[#fff] bg-[#004E98] py-2 w-full rounded-3xl text-sm hover:bg-[#093157] text-center mb-2"
            >
              HIRE A SKILLED TRADER
            </Link>
            <p className="mb-3">or</p>
            <Link
              to="/onboarding/provider"
              onClick={() => closeModal()}
              className="text-[#004E98] py-2 text-center rounded-3xl text-sm hover:bg-[#004E98] hover:text-[#fff] w-full border border-[#004E98] mb-2"
            >
              OFFER A SERVICE
            </Link>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ButtonWithModal;
