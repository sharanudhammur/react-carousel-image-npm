// src/stories/Accordion.jsx
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const AccordionSection = ({
  title,
  content,
  isOpen,
  onClick,
  hiderBorderBottom
}) => {
  const contentRef = useRef(null);

  return (
    <div
      className="accordion-section"
      style={{ borderBottom: hiderBorderBottom && "0px" }}
    >
      <div className="accordion-header" onClick={onClick}>
        <div className="header-name">{title}</div>
        {/* Arrow icon */}
        <span className={`arrow-icon ${isOpen ? "rotate" : ""}`}>
          <MdKeyboardArrowRight />
        </span>
      </div>
      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px"
        }}
      >
        {content}
      </div>
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <AccordionSection
          key={index}
          title={section.title}
          content={section.content}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
          hiderBorderBottom={sections.length === index + 1}
        />
      ))}
    </div>
  );
};

Accordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired
};

export default Accordion;
