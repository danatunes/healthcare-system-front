import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export const Footer = () => {
  return (
    <div
      className={clsx(
        "flex mt-auto flex-col py-10 items-center justify-between font-montserrat text-sm font-normal space-y-3 space-x-0",
        "sm:flex-row sm:space-y-0 sm:space-x-3"
      )}
    >
      <Link to="#">Contact</Link>
      <Link to="#">© 2022 Healthcare System. All Rights Reserved</Link>
      <Link to="#">Get help</Link>
    </div>
  );
};
