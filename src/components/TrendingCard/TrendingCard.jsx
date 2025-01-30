import React, { useState } from 'react';
import './TrendingCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const TrendingCard = ({ trendingData }) => {
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = trendingData.length;
  const slidesToShow = 5;

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'none', background: 'red' }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'none', background: 'green' }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 3,
    afterChange: (index) => setCurrentSlide(index),
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="trending-card">
      <div className="card-heading">
        <h2 className="card-heading-title">Trending Now</h2>
      </div>
      <div className="slider-container">
        {currentSlide > 0 && (
          <div className="carousel-prev-btn">
            <div
              className="prev-btn carousel-btn"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <i className="bx bx-chevron-left"></i>
            </div>
          </div>
        )}
        <Slider ref={sliderRef} {...settings}>
          {trendingData.map((item, index) => (
            <div
            className={`carousel-card-data ${
              index === 3 && 'move-carousel-slide'
            } ${index === 0 && currentSlide === 3 && currentSlide === 0 ? 'move-carousel-slide-right' : ''}`}
            key={index}
          >
              <div className="carousel-image-bg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="carousel-image"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="title-number">{index + 1}</div>
            </div>
          ))}
        </Slider>
        {currentSlide + slidesToShow < totalSlides && (
          <div className="carousel-next-btn">
            <div
              className="next-btn carousel-btn"
              onClick={() => sliderRef.current.slickNext()}
            >
              <i className="bx bx-chevron-right"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingCard;
