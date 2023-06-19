import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Head = () => {
  const total_data = useSelector((store)=> store.cart.items);
  return (
    <div className="w-full h-20 px-6 py-4 flex justify-between border border-solid items-center">
      <div className="font-bold text-2xl">Shopshy</div>
      <div className="w-[20%] flex justify-between h-[100%] items-center">
        <Link to="/">
          <span className="font-bold text-xl hover:text-red-950 cursor-pointer">
            Home
          </span>
        </Link>
        <Link to="/products">
          <span className="font-bold text-xl hover:text-red-950 cursor-pointer">
            Products
          </span>
        </Link>
        
        <Link to="/cart">
          <div className="relative">
            <span className="font-bold text-3xl hover:text-red-950 cursor-pointer">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <span className="w-5 h-5 absolute top-0 bg-red-600 flex justify-center items-center text-white rounded-xl text-xs font-bold p-2">
              {total_data.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Head;
