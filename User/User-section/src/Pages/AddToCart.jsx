import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTab } from '../store/cart';
import CartItem from '../Components/cartitems';

const AddToCart = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className={`fixed top-0 right-0 bg-lightGray shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}`}>
      <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
      <div className='p-5 overflow-y-auto'>
        {carts.length > 0 ? (
          carts.map(item => <CartItem key={item.productId} product={item} />)
        ) : (
          <p className='text-center text-white'>Your cart is empty</p>
        )}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white py-2' onClick={handleCloseTabCart}>CLOSE</button>
        <button className='bg-primary text-white py-2'>CHECKOUT</button>
      </div>
    </div>
  );
};

export default AddToCart;
