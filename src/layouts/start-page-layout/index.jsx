import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const StartPageLayout = () => {
  return (
    <div className="flex h-full min-h-[100vh] w-full flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-[#BEE0FF] to-blue-100 font-montserrat p-7">
      <div className="flex h-full flex-col justify-center space-y-5">
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
