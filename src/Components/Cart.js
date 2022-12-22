import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Empty Cart</h1>;
  return (
    <section className="py-4 container">
    <h1>Shopping Cart</h1>
      <div className="justify-content-center">
        <div className="col-12 pt-3">
          <h4>
            Total Items:{totalUniqueItems} => Total Quantity:{totalItems}
          </h4>
          <table className="table m-0" style={{ color: "white", padding: "2rem" }}>
            <tbody>
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Operations</th>
              {items.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <img
                        src={item.thumb}
                        style={{ height: "6rem", width: "6rem" }}
                      />
                    </td>
                    <td>{item.pname}</td>
                    <td>
                      {item.price}
                      {item.currency}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-3"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-3"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="row ms-2">
          <h4>Total Price: {cartTotal}$</h4>
        </div>
        <div className="row">
          <div className="col-auto ms-auto">
            <button className="btn btn-danger ms-2" onClick={() => emptyCart()}>
              Clear cart
            </button>
            <button className="btn btn-primary ms-2">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
