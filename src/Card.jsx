import React from "react";
import "./Card.css"; // Import CSS file for styling

const Card = ({ logo, review }) => {
  return (
    <div className="card-comment">
      <div className="logo-comment-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="review">{review}</div>
      </div>
    </div>
  );
};

export default Card;
