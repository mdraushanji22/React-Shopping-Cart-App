import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ setData, cart }) => {
  const navigate = useNavigate();
  // console.log(useLocation());
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((Product) => Product.category === category);
    // console.log(element);
    setData(element);
  };
  const filterByPrice = (price) => {
    const element = items.filter((Product) => Product.price >= price);
    // console.log(element);
    setData(element);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <FaCartArrowDown style={{ fontSize: "1.5rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div onClick={() => setData(items)} className="items">
              No Filter
            </div>
            <div
              onClick={() => {
                filterByCategory("mobiles");
              }}
              className="items"
            >
              Mobiles
            </div>
            <div
              onClick={() => {
                filterByCategory("laptops");
              }}
              className="items"
            >
              Laptops
            </div>
            <div
              onClick={() => {
                filterByCategory("tablets");
              }}
              className="items"
            >
              Tablats
            </div>
            <div onClick={() => filterByPrice(29999)} className="items">
              {">="}29999
            </div>
            <div onClick={() => filterByPrice(49999)} className="items">
              {">="}49999
            </div>
            <div onClick={() => filterByPrice(69999)} className="items">
              {">="}69999
            </div>
            <div onClick={() => filterByPrice(89999)} className="items">
              {">="}89999
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
