import React from "react";
import Mats from "./mats";
import "../Style/equipment.css";
const MaterialRow = () => {
  const listItems = Mats.map((item) => (
    <div className="cardd" key={item.id}>
      <div className="cardd-img">
        <img src={item.thumb} alt={item.pname}/>
      </div>
      <div className="cardd-header">
        <h2>{item.pname}</h2>
        <p>{item.desc}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn" style={{color:'black',backgroundColor:'#E6FFFD'}}>Add to cart</div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container1">
      <h1>Materials</h1>
        <div className="main-content">{listItems}</div>
      </div>
    </>
  );
};

export default MaterialRow;
