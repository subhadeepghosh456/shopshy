import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItems, changeQuantity } from "./utils/cartSlice";

const Detail = () => {
  const info = useLocation();
  //console.log(info.state);

  const { category, description, image, price, rating, title } = info.state;
  const { rate, count } = rating;

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAdd = (obj) => {
    dispatch(addItems(obj));
  };

  const data = cartItems.filter((item) => item.id === info.state.id);
  //console.log(data);
  const quantity = data[0]?.qty;
  console.log(quantity);

  const ADD_BTN = (
    <button
      className="bg-green-600 rounded-md text-white px-2"
      onClick={() => {
        handleAdd({ ...info.state, qty: 1 });
      }}
    >
      ADD TO CART
    </button>
  );
  
  const change_quantity = (id, qty) => {
    dispatch(changeQuantity({ id, qty }));
  };

  const inc_dec_btn = (
    <div className="bg-slate-500 rounded-md text-white">
      <button
        className="px-4"
        onClick={() => {
          change_quantity(info.state.id, quantity - 1);
        }}
      >
        -
      </button>
      {quantity}
      <button
        className="px-4"
        onClick={() => {
          change_quantity(info.state.id, quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );

  //const handleDelete = (obj) => dispatch(removeItem(obj.id))

  const green = (
    <p className="text-green-800 font-bold">
      {rate}
      <i className="fa-solid fa-star text-yellow-400"></i>
      <span>({count} Number of persons rated this)</span>
    </p>
  );

  const red = (
    <p className="text-red-800 font-bold">
      {rate}
      <i className="fa-solid fa-star text-yellow-400"></i>
      <span>({count} Number of persons rated this)</span>
    </p>
  );

  return (
    <div className="w-[70%] mx-auto h-[60vh] my-[80px] flex justify-around ">
      <div className="w-[50%] flex flex-col items-center ">
        <img src={image} alt="product" className="w-52 shadow-xl" />
        <p className="text-center font-mono font-bold">{price}$</p>

        {cartItems.some((p) => p.id === info.state.id) ? inc_dec_btn : ADD_BTN}
      </div>
      <div className="w-[50%]">
        <h1 className="text-xl font-bold uppercase underline">{title}</h1>
        <h1 className="text-xl font-bold uppercase">Brand: Shopshy</h1>
        <p className="uppercase">
          {" "}
          <span className="font-bold uppercase"> Category:</span> {category}
        </p>
        {rate >= 4 ? green : red}
        <p className="uppercase font-extralight py-10">{description}</p>
        <div className="flex justify-around">
          <div className="flex flex-col">
            <i className="fa-solid fa-truck text-center"></i>
            <span>Home delivery</span>
          </div>
          <div className="flex flex-col">
            <i className="fa-solid fa-file-invoice-dollar text-center"></i>{" "}
            <span>30 Days Money Back</span>{" "}
          </div>
          <div className="flex flex-col">
            <i className="fa-solid fa-screwdriver-wrench text-center"></i>{" "}
            <span>1 year warranty</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
