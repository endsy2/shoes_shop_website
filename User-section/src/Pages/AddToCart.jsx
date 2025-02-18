import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTab } from '../store/cart';
import CartItem from '../Components/cartitems';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const cartRef = useRef(null);

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      handleCloseTabCart();
    }
  };

  useEffect(() => {
    if (statusTab) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [statusTab]);

  return (
    <div
      ref={cartRef}
      className={`fixed top-0 right-0 dark:bg-lightGray bg-white shadow-2xl w-[450px] h-full grid grid-rows-[60px_1fr_60px]
      transform transition-transform duration-500
      ${statusTab === false ? 'translate-x-full' : ''}`}
    >
      <h2 className="p-5 dark:text-white text-2xl text-primary-600">Shopping Cart</h2>
      <div className="p-5 overflow-y-auto">
        {carts.length > 0 ? (
          carts.map((item) => <CartItem key={item.productId} product={item} />)
        ) : (
          <p className="text-center text-white">Your cart is empty</p>
        )}
      </div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white py-2" onClick={handleCloseTabCart}>
          CLOSE
        </button>
        <Link
          className="bg-primary text-white py-2 flex justify-center items-center"
          to="/checkout"
          onClick={handleCloseTabCart}
        >
          CHECKOUT
        </Link>

      </div>
    </div>
  );
};

export default AddToCart;
