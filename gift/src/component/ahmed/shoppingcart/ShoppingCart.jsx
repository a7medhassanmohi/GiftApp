import React from "react";
import shopingimd from "../../../assets/1-800x900.jpg";

function ShoppingCart() {
  return (
    <div className="shopping__cart">
      <div className="container shopping__cart__cont">
        <div className="shopping__item__titlte">
          <h6>Product</h6>
          <h6>Price</h6>
          <h6>Quantity</h6>
          <h6>Subtotal</h6>
        </div>
        <div className="shopping__item">
          <div className="shopping__item__info">
            <img src={shopingimd} alt="" className="img-fluid" />
            <h5>Smart Watch</h5>
          </div>
          <h6>$40.00</h6>

          <input class=" form-control" type="number" min="1" max="100000" />
          <h4>$40</h4>
        </div>
        <div className="shopping__item">
          <div className="shopping__item__info">
            <img src={shopingimd} alt="" className="img-fluid" />
            <h5>Smart Watch</h5>
          </div>
          <h6>$40.00</h6>

          <input class=" form-control" type="number" min="1" max="100000" />
          <h4>$40</h4>
        </div>
        <div className="shpopping__btn">
          <button className="contiueshopp">Continue Shopping</button>
          <button>Clear Cart</button>
          <button>Proceed CheckOut</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
