import React, { useState } from "react";
import './Accordion.css'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import { ReactSVG } from "react-svg";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="faq-accordion">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full faq-accordion-button"
      >
        <span className="faq-accordion-title">{title}</span>
        {accordionOpen ? (
          <ReactSVG src={minus} />
        ) : (
          <ReactSVG src={plus} />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden faq-accordion-subtitle">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;