import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const newItem = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, newItem]);
    toast.success("Item is added in Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    const filteredProduct = items.filter((item) => item.id == id);
    setProduct(filteredProduct[0]);

    const relatedProducts = items.filter(
      (item) => item.category === product.category
    );
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="text-center">
        <h1>Related Products</h1>
      </div>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
