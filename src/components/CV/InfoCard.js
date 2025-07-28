// components/InfoCard.js
import React from "react";

const InfoCard = ({ title, icon, items }) => {
  return (
    <div className="info-card">
      <h3>
        <i className={icon}></i> {title}
      </h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <i className="fas fa-check-circle" style={{ color: "#2a4a9c" }}></i>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
