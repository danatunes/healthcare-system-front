import React, { Suspense } from "react";
import { Header } from "../../components/header";
import { Outlet } from "react-router-dom";

export const IndexLayout = () => {
  return (
    <div className="h-full w-full p-8">
      <div className="mx-auto h-full w-9/12 space-y-20">
        <Header />
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
