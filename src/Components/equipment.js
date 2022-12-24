import React from "react";
import Products from "./product";
import "../Style/cards.css"
import ItemCard from "./itemcard";
const EquipmentRow = () => {
  const listItems = Products.map((item, index) => (
    <div className="col-4">
      <ItemCard
        thumb={item.thumb}
        pname={item.pname}
        desc={item.desc}
        price={item.price}
        currency={item.currency}
        key={index}
        item={item}
      />
    </div>
  ));
  return (
    <div className="container">
      <h1 className="text-dark">Equipments</h1>

      <div className="row">{listItems}</div>
    </div>
  );
};

export default EquipmentRow;
