import React, { useEffect, useState } from "react";
import { API } from "../constant/config";
import Feature from "./featureproducts/Feature";
import { Link } from "react-router-dom";
import Shrimmer from "./srimmer/Shrimmer";

const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getfeatureProducts();
  }, []);

  async function getfeatureProducts() {
    const json = await fetch(API);
    const data = await json.json();

    //console.log(data);
    setProducts(data);
  }

  return (
    <div className="overflow-x-hidden">
      <div className="h-[70vh] w-[100vw] flex justify-center items-center ">
        <div className="h-[80%] w-[70%] bg-slate-200 flex justify-around items-center">
          <div className="flex flex-col justify-around">
            <p className="font-bold text-xl">Shopshy.com</p>
            <p className="font-bold text-slate-950 text-6xl">Best Products</p>
            <p className="font-bold text-slate-950 text-4xl">Best Quality</p>
            <p className="font-bold text-slate-950 text-6xl">
              Affordable Price.
            </p>
          </div>
          <div className="w-96 h-96 flex items-center">
            <img
              alt="poster"
              src="https://m.economictimes.com/thumb/msid-59351903,width-1200,height-900,resizemode-4,imgsize-250492/love-to-travel-and-shop-we-have-a-few-places-in-mind-for-you.jpg"
            />
          </div>
        </div>
      </div>
      <p className="w-[1000px] mx-auto text-2xl font-bold">Most popular</p>
      <div className="flex justify-around mx-auto w-[700px] items-center">
        {products.length===0 ?<Shrimmer /> : products.map((item, index) =>
          index < 3 ? (
            <Link key={item.id} state={item} to="/detail">
              <Feature {...item} />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;
