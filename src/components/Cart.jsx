import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5  " style={{ width: "54%" }}>
        {cart.length == 0 ? (
          <div className="text-center my-5">
            <h1>Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div class="card mb-3 my-5" style={{ Width: "540px" }}>
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={product.imgSrc}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body text-center">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">{product.description}</p>
                        <button className="btn btn-primary mx-3">
                          {product.price} ₹
                        </button>
                        <button className="btn btn-warning">By Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      {cart.length != 0 && (
        <div
          className="container text-center my-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <button className="btn btn-warning ">CheckOut</button>
          <button onClick={() => setCart("")} className="btn btn-danger mx-5">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
