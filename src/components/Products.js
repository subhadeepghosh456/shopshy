import React, { useState, useEffect } from "react";

import CardGrid from "./CardGrid";
import { Link } from "react-router-dom";
import { API } from "../constant/config";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const [input, setInput] = useState("");
  //const [me,setMe]=useState(false)
  
  const getProducts = async () => {
    const json = await fetch(API);
    const data = await json.json();
    setProducts(data);
    setFilterData(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    //console.log('call')
    const info = products.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    
    setFilterData(info);
   
  }, [input]);

  return (
    <div className="w-[70%] mx-auto flex">
      <div className="w-[30%]">
        <div>
          <input
            placeholder="search here.."
            className="outline-none w-full bg-slate-200 py-3 rounded-md"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="w-[70%] h-[100vh] flex flex-wrap gap-[2%]">
        {filterdata.length === 0 ? (
          <h1 className="w-full h-[100vh] flex justify-center items-center">
           Loading...
          </h1>
        ) : (
          filterdata.map((item) => {
            return (
              <Link state={item} key={item.id} to="/detail">
                {" "}
                <CardGrid {...item} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
