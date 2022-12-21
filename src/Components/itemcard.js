import React from "react";
import "../Style/equipment.css";
const ItemCard = (props) => {
  return (
    <div className="cardd" key={props.id}>
      <div className="cardd-img">
        <img src={props.thumb} alt={props.pname} />
      </div>
      <div className="cardd-header">
        <h2>{props.pname}</h2>
        <p>{props.desc}</p>
        <p className="price">
          {props.price}
          <span>{props.currency}</span>
        </p>
        <button
          className="btn"
          style={{ color: "white", border: "1px solid black" }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
