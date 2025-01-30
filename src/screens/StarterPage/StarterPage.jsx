import React from 'react';
import './StarterPage.css';
import Header from '../../components/Header/Header';
import BannerContent from '../../components/BannerContent/BannerContent';
import TrendingCard from '../../components/TrendingCard/TrendingCard';
import ReasonToJoin from '../../components/ReasonToJoin/ReasonToJoin';
import FAQ from '../../components/FAQ/FAQ';
import StarerFooter from '../../components/StarerFooter/StarerFooter';
import GetStarted from '../../components/GetStarted/GetStarted';
import MainPageData from '../../assets/data/MainPageData';
import CurvedArc from '../../Common/CurvedArc/CurvedArc';

const StarterPage = () => {
  return (
    <div>
      {MainPageData.map((item, index) => (
        <div className="starter-page" key={index}>
          <div className="banner-page">
            <div className="banner-bg">
              <div className="banner-bg-image">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
                  srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg 959w"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <div className="banner-overlay"></div>
            </div>
            <div className="banner-container ">
              <Header />
              <BannerContent BannerContent={item.mainContent} />
              <CurvedArc />
            </div>
          </div>
          <div className="starter-content">
            <div className="container">
              <TrendingCard trendingData={item.mainContent.trendingNow}/>
              <ReasonToJoin reasonToJoin={item.mainContent.Benefits}/>
              <FAQ FAQs={item.mainContent.FAQs}/>
              <GetStarted emailPara={item.mainContent.Header.EmailPrompt}/>
              <StarerFooter />
              <StarerFooter starterFooterData={item.Footer}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarterPage;
