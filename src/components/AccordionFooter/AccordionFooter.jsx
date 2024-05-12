import React, { useState } from 'react'
import plusFooter from '../../assets/plus-footer.svg'
import minusFooter from '../../assets/minus-footer.svg'
import './AccordionFooter.css'
import { ReactSVG } from 'react-svg';

const AccordionFooter = ({ title, dropdown }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="footer-accordion">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full footer-accordion-button"
      >
        <span className={!accordionOpen ? "footer-accordion-title transition-all duration-300 ease-in-out" : 'footer-accordion-title accordion-title--open transition-all duration-300 ease-in-out'}>{title}</span>
        {accordionOpen ? (
          <ReactSVG src={minusFooter} />
        ) : (
          <ReactSVG src={plusFooter} />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={!accordionOpen ? "overflow-hidden footer-accordion-subtitle transition-all duration-300 ease-in-out" : "overflow-hidden footer-accordion-subtitle accordion--open transition-all duration-300 ease-in-out"}>{dropdown}</div>
      </div>
    </div>
  )
}

export default AccordionFooter