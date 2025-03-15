import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/6 bg-gray-100 p-4 max-h-64">
      <div className="border-b pb-1 px-2 text-xl font-bold">Category</div>
      {categories?.map((category, index) => (
        <div
          onClick={() => setCategory(category)}
          className="text-sm p-2 cursor-pointer hover:bg-gray-200"
          key={index}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
