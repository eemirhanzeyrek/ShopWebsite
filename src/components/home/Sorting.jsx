import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-8 p-5 flex  items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-white py-3 px-5"
        name=""
        id=""
      >
        <option disabled value="">
          Select
        </option>
        <option value="default">Highlights</option>
        <option value="inc">Increment</option>
        <option value="dec">Decrement</option>
      </select>
    </div>
  );
};

export default Sorting;
