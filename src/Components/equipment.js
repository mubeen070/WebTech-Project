import React from "react";
import "../Style/equipment.css";
import { useNavigate } from "react-router-dom";
import Products from "./product";
const EquipmentRow = () => {
  const listItems = Products.map((item) => (
    <div className="cardd" key={item.id}>
      <div className="cardd-img">
        <img src={item.thumb} alt={item.pname} />
      </div>
      <div className="cardd-header">
        <h2>{item.pname}</h2>
        <p>{item.desc}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <button className="btn" style={{color:'white',border:'1px solid black'}}>Add to cart</button>
      </div>
    </div>
  ));
  return (
    <div className="container1">
      <h1>Equipments</h1>
      <div className="main-content">{listItems}</div>
    </div>
  );
};

export default EquipmentRow;
