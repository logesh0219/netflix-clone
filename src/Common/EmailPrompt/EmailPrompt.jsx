import React from 'react';
import './EmailPrompt.css';

const EmailPrompt = ({ emailPara }) => {

  return (
    <form className="email-wrapper">
      <p>{emailPara}</p>
      <div className="email-container">
        <div className="email-input">
          <div className="email-input-wrapper">
            <input type="text" id="email-input" />
            <div className="input-overlay">
              <label htmlFor="email-input">Email address</label>
            </div>
          </div>
        </div>
        <button className="email-btn">
          Get Started
          <div aria-hidden="true" className="btn-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true" > <path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor" ></path></svg>
          </div>
        </button>
      </div>
    </form>
  );
};

export default EmailPrompt;
