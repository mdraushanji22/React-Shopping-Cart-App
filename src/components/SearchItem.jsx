import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
const SearchItem = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const filteredItems = () => {
      const results = items.filter((product) =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      // console.log(results);
      setFilterData(results);
    };
    filteredItems();
  }, [term]);

  return (
    <>
      <Product cart={cart} setCart={setCart} items={filterData} />
    </>
  );
};

export default SearchItem;
