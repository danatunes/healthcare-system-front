import React, { Suspense } from "react";
import { Footer, Header } from "../../components";
import { Outlet } from "react-router-dom";
import clsx from "clsx";

export const IndexLayout = () => {
  return (
    <div className="h-full w-full min-h-[100vh] pt-7 px-7 bg-[#F8F9FD]">
      <div className={clsx("w-full h-full mx-auto space-y-20", "md:w-10/12")}>
        <Header />
        <div className={clsx("mx-auto h-full w-full", "sm:w-10/12")}>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};
