import React, { useState } from 'react';
import './Header.css';
import LogoSvg from '../../Common/LogoSvg/LogoSvg';
import LanguageForm from '../../Common/LanguageForm/LanguageForm';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  React.useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="banner-header">
      <div className=" banner-wrapper container">
        <div className="header-container">
          <header className="">
            <div className="starter-header-left">
              <LogoSvg />
            </div>
            <div className="starter-header-right">
              <LanguageForm />
              <div className="starter-header-section">
                <button className="starter-header-btn">Sign in</button>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};
export default Header;
