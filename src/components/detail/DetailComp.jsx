import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating.count) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[500px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-3xl font-bold">{productDetail?.title}</div>
        <div className="my-4">{productDetail?.description}</div>
        <div className="my-1 font-bold">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-1 font-bold">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-3xl font-bold">
          {productDetail?.price} <span className="text-sm">$</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-xl cursor-pointer">
            -
          </div>
          <input
            className="w-10 text-center text-xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="my-4 border w-[200px] font-bold rounded-md bg-red-500 text-white cursor-pointer h-16 flex items-center justify-center"
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
