import React from 'react';
import './OrderCard.css'; // Import CSS file for styling

const OrderCard = ({ order }) => {
  const { id, date, items, total } = order;

  return (
    <div className="order-card">
      <div className="order-details">
        <h2>Order #{id}</h2>
        <p>Date: {date}</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default OrderCard;
