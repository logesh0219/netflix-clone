<<<<<<< HEAD
import React, { useState } from 'react';
import './Header.css';
import LogoSvg from '../../Common/LogoSvg/LogoSvg';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  React.useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
=======
import './Header.css';
import LogoSvg from '../../Common/LogoSvg/LogoSvg';
import LanguageForm from '../../Common/LanguageForm/LanguageForm';

const Header = () => {

>>>>>>> eade0df (Footer will be adder)

  return (
    <div className="banner-header">
      <div className=" banner-wrapper container">
        <div className="header-container">
          <header className="">
            <div className="starter-header-left">
              <LogoSvg />
            </div>
            <div className="starter-header-right">
<<<<<<< HEAD
              <div className="language-select-wrapper">
                <select className="starter-language" name="language-select">
                  <option value="english" selected>
                    {isSmallScreen ? 'Eng' : 'English'}
                  </option>
                  <option value="hindi">
                    {isSmallScreen ? 'Hin' : 'Hindi'}
                  </option>
                  <option value="tamil">
                    {isSmallScreen ? 'Tam' : 'Tamil'}
                  </option>
                </select>
                <div className="dropdown-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    data-icon="CaretDownSmall"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
=======
              <LanguageForm />
>>>>>>> eade0df (Footer will be adder)
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
