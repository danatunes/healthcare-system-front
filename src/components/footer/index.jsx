import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between font-montserrat text-sm font-normal">
      <Link to="#">Contact</Link>
      <Link to="#">© 2022 Healthcare System. All Rights Reserved</Link>
      <Link to="#">Get help</Link>
    </div>
  );
};
