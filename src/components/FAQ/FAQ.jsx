import React, { useState } from 'react';
import './FAQ.css';

const FAQ = ({ FAQs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);

  }
  return (
    <div className="faq-section">
      <h2 className="card-heading-title">Frequently Asked Questions</h2>
      <div className="accordian-container">
        {FAQs.map((item, index) => (
          <div className="accordion" key={index}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="accordian-header-title">{item.Question}</h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 36 36" width="36" height="36" aria-hidden="true" className={`accordion-heading_iconStyles ${openIndex === index ? 'open' : ''}`}>
                <path fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path>
              </svg>
            </div>
            <div
              className={`accordion-content ${openIndex === index ? 'open' : ''}`}
            >
              <p className='accordian-header-para'>{item.Answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default FAQ;
