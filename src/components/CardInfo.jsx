import React from "react";
import "../css/components/cardInfo.css";

const CardInfo = ({ icon, title, description, isBlueCard }) => {
  return (
    <div className="card-info">
      <div
        className={
          isBlueCard ? "card-info--icon dark-blue--icon" : "card-info--icon"
        }
      >
        {icon}
      </div>
      <div className="card-info__details">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardInfo;
