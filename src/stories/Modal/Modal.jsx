import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Modal.css"; // Ensure to import the CSS file
import { IoMdClose } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

function Modal({ isOpen, onClose, title, footer, children }) {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "fade-in" : "fade-out"}`}>
      <div className={`modal-content ${isOpen ? "show" : ""}`}>
        <div className="modal-header">
          <div className="title">{title}</div>
          {/* <button className="modal-close" onClick={onClose}>
            <IoMdClose />
            <MdOutlineClose />
            <AiOutlineClose />
          </button> */}
          {/* <AiOutlineClose className="modal-close" /> */}
          <CgClose className="modal-close" onClick={onClose} />
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default Modal;
