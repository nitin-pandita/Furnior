import React from "react";
import furnitureData from "../../data/furniture-data";
import './CardItem.css';
const CardItem = () => {
  return (
    <div className="card-container">
      {furnitureData.map((item, index) => (
        <div key={index} className="card-flex ">
          <div className="shadow-lg p-5">
            <img src={item.image_url} alt={item.description} />
            <h3 className="regular-24">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
