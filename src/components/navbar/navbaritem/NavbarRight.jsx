import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center border p-2 rounded-full bg-gray-100">
        <input
          className="bg-gray-100 outline-none"
          type="text"
          placeholder="Search for something"
        />
        <BiSearch size={25} />
      </div>
      <div className="cursor-pointer">
        <AiOutlineHeart size={25} />
      </div>
      <div onClick={() => navigate("cart")} className="relative cursor-pointer">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </div>
        <SlBasket size={25} />
      </div>
    </div>
  );
};

export default NavbarRight;
