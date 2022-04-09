import React from "react";
import { HeadingConsult } from "../../components/headingConsult";
import { FeaturesCard } from "../../components/featuresCard";
import Bg_Decor_Plus from "../../images/bg_decor_plus.webp";
import Bg_Decor_Dots from "../../images/bg_decor_dots.webp";
import Bg_Decor_Area from "../../images/bg_decor_area.webp";
import clsx from "clsx";

export const MainLayout = () => {
  return (
    <>
      <img
        src={Bg_Decor_Plus}
        alt="decor"
        className={clsx(
          "absolute -top-20 left-0 w-10",
          "sm:left-40 sm:w-20 sm:-top-10"
        )}
      />
      <img
        src={Bg_Decor_Dots}
        alt="decor"
        className="absolute left-10 top-44 w-24"
      />
      <img
        src={Bg_Decor_Area}
        alt="decor"
        className="absolute -left-10 top-[510px] -z-10 w-7/12"
      />
      <div className="h-full w-full space-y-20">
        <HeadingConsult />
        <FeaturesCard />
      </div>
    </>
  );
};
