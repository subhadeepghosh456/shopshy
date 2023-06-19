import React from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity } from "./utils/cartSlice";

const CartItem = ({image,price,qty,id}) => {
    const dispatch = useDispatch()
    const change_quantity = (id, qty) => {
        dispatch(changeQuantity({ id, qty }));
      };
    return (
        <div className='flex justify-between items-center border rounded-md'>
            <div className='w-32 h-32'>
                <img src={image} alt='cart_img' className='w-32 h-32 object-contain'/>
            </div>
            <div className='bg-slate-500 rounded-md text-white'>
                <button className='px-7' onClick={()=>{change_quantity(id, qty - 1)}}>-</button>
                <span className='w-8'>{qty}</span>
                <button className='px-7' onClick={()=>{change_quantity(id, qty + 1)}}>+</button>

            </div>
            <div className='w-[10%]'>
                <div>Price{price}$</div>
                <div className='w-full overflow-auto'>Sub Total: {price*qty}$</div>
            </div>
        </div>
    );
}

export default CartItem;
