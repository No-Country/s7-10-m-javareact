import ReactModal from 'react-modal';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    boxShadow: '1px 1px 5px 1px #777',
    border: '1px solid #004E98',
    width: '290px',
    height: '290px'
  },
};



const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal ariaHideApp={false} style={customStyles} isOpen={isOpen} onRequestClose={onClose}>
      {children}
    </ReactModal>
  );
};

export default Modal;