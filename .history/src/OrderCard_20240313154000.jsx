import React from "react";
import "./OrderCard.css"; // Import CSS file for styling

const OrderCard = ({ order }) => {
  const { id, date, items, total } = order;

  return (
    <div className="order-card">
      <table>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </td>
            <td>${total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderCard;
