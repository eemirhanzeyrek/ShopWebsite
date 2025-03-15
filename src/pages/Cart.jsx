import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, index) => (
            <CartComp key={index} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-xl">
            Total Amount :{" "}
            <span className="font-bold text-xl ml-2"> {totalAmount} $</span>
          </div>
        </div>
      ) : (
        <div>There are no products in your cart</div>
      )}
    </div>
  );
};

export default Cart;
