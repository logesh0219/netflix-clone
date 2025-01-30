import React from 'react';
import './StarerFooter.css';

import LanguageForm from '../../Common/LanguageForm/LanguageForm';
import './StarerFooter.css';


const StarerFooter = ({ starterFooterData }) => {
    console.log(starterFooterData);

    return (
      <footer>
        <div className='starter-footer'>
          <div className="question-call para"><p className="para2">{starterFooterData.Contact}<span className="cell-para">{starterFooterData.Cell}</span></p></div>
        </div>
        <div className="footer-container marginTop">{
          starterFooterData.Links.map((item, index) => (
            <div className="footer-wrapper" key={index}>
              <div className="footer-data"><p className="para3">{item}</p></div>
            </div>
          ))
        }</div>
        <div className="marginTop">
          <LanguageForm />
        </div>
        <div className="marginTop">
          <div className="para3" style={{ textDecoration: "none", margin: 0 }}>Netflix India</div>
        </div>
      </footer>
    )
  }

  export default StarerFooter