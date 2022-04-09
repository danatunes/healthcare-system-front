import React, { Suspense } from "react";
import { Header } from "../../components/header";
import { Outlet } from "react-router-dom";
import clsx from "clsx";
import { Footer } from "../../components/footer";

export const IndexLayout = () => {
  return (
    <div className="h-full w-full min-h-[100vh] pt-7 px-7 bg-[#F8F9FD]">
      <div className={clsx("mx-auto h-full w-full space-y-20", "sm:w-9/12")}>
        <Header />
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};
