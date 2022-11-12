import React from "react";
import Products from "./product";
import './equipment.css';
const EquipmentRow = () => {
  const listItems = Products.map((item) => (
    <div className="cardd" key={item.id}>
      <div className="cardd-img">
        <img src={item.thumb} />
      </div>
      <div className="cardd-header">
        <h2>{item.pname}</h2>
        <p>{item.desc}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn text-primary">Add to cart</div>
      </div>
    </div>
  ));
  return (
    <div className="container1">
      <div className="main-content">{listItems}</div>
    </div>
  );
};

export default EquipmentRow;
