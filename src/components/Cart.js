import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const total_item = useSelector(store=>store.cart.items)
    const [amount,setTotalamount]= useState(0)
    const [items,setTotalItem] = useState(0)

    useEffect(() => {
        const subTotal = total_item.reduce((acc, item) => {
          acc = acc + item.qty * Number(item.price);
          return acc;
        }, 0);
        setTotalamount(subTotal);
      }, [total_item]);

      useEffect(() => {
        const total = total_item.reduce((acc, item) => {
          acc = acc + item.qty;
          return acc;
        }, 0);
        setTotalItem(total);
      }, [total_item]);

    return (
        <div className='w-[70%] mx-auto'>
           
            {
                total_item.map(item => <CartItem {...item}/>)
            }
             <p className='text-center'>There are {items} item's and total price To pay {amount} $</p>
        </div>
    );
}

export default Cart;
