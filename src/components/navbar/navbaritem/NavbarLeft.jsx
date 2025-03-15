import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("")}
      className="text-2xl font-bold tracking-wider cursor-pointer"
    >
      SHOP
    </div>
  );
};

export default NavbarLeft;
