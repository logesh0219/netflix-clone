import React from 'react';
import './ReasonToJoin.css';

const ReasonToJoin = ({ reasonToJoin }) => {
  return (
    <div className="reason-to-join">
      <div className="card-heading">
        <h2 className="card-heading-title">More reasons to join</h2>
      </div>
      <div className="reason-to-join-wrapper">
        {reasonToJoin.map((item, index) => (
          <div className="reason-to-join-container" key={index}>
            <div className="reason-to-join-content">
              <h2 className="heading2">{item.Title}</h2>
              <div className="para2-container">
                <p className="para2">{item.Description}</p>
              </div>
              <div className="reason-to-join-image">
                <img
                  src={item.image}
                  className="card-image"
                  width={72}
                  height={72}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonToJoin;
