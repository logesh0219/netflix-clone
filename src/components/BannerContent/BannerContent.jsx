<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> eade0df (Footer will be adder)
import './BannerContent.css';
import EmailPrompt from '../../Common/EmailPrompt/EmailPrompt';

const BannerContent = ({ BannerContent }) => {
  return (
    <div className="banner-content">
      <div className="banner-content-wrapper">
        <h1 className="heading1 banner-head">{BannerContent.Header.Slogan}</h1>
        <p className='para1'>{BannerContent.Header.CTA}</p>
        <EmailPrompt emailPara={BannerContent.Header.EmailPrompt}/>
      </div>
    </div>
  );
};

export default BannerContent;
