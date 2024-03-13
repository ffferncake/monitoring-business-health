import React from "react";
import "./Card.css"; // Import CSS file for styling

const Card = ({ logo, review }) => {
  return (
    <div className="card-comment">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="review">{review}</div>
    </div>
  );
};

export default Card;