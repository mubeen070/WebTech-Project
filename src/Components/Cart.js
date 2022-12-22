import React from "react";
import { useCart } from "react-use-cart";
import "../Style/cart.css";

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
            Total Items:{totalUniqueItems} ^ ^ Total Quantity:{totalItems}
          </h4>
          <table
            className="table center"
            style={{ color: "black", width:"100%" }}
          >
            <tbody >
              <th>Item</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Operations</th>
              {items.map((item, index) => {
                return (
                  <tr style={{padding: '2rem'}}>
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
                        className="button"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="button"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="button red"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="center ms-2" >
          <h4 style={{color:'black'}}>Total Price: {cartTotal}$</h4>
        </div>

        <div className="center">
          <button className="btn btn-danger ms-2" onClick={() => emptyCart()}>
            Clear cart
          </button>
          <button className="btn btn-primary ms-2">Buy</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
