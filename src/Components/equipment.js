import React from "react";
import Products from "./product";
import ItemCard from "./itemcard";
const EquipmentRow = () => {
  const listItems = Products.map((item,index) => (
    <ItemCard thumb={item.thumb} pname={item.pname} desc={item.desc} price={item.price} currency={item.currency} key={index} item={item}/>
  ));
  return (
    <div className="container1">
      <h1 className="text-dark">Equipments</h1>
      <div className="main-content">{listItems}</div>
    </div>
  );
};

export default EquipmentRow;