import React, { Suspense } from "react";
import { Header } from "../../components/header";
import { Outlet } from "react-router-dom";
import clsx from "clsx";

export const IndexLayout = () => {
  return (
    <div className="h-full w-full p-8">
      <div className={clsx("mx-auto h-full w-full space-y-20","sm:w-9/12")}>
        <Header />
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
