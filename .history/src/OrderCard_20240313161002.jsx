import React from "react";
import "./OrderCard.css"; // Import CSS file for styling

const OrderCard = ({ orders }) => {
  return (
    <div className="order-card">
      <table>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>
                <ul>
                  {order.items.map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
                </ul>
              </td>
              <td>${order.total}</td>
              <td>
                <span className={`status-${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderCard;
