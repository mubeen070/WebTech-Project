import React from "react";
import Mats from "./mats";
import "../Style/cards.css";
import ItemCard from "./itemcard";
const MaterialRow = () => {
  const listItems = Mats.map((item,index) => (
    <ItemCard thumb={item.thumb} pname={item.pname} desc={item.desc} price={item.price} currency={item.currency} key={index} item={item}/>
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
