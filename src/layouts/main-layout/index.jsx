import React from "react";
import { HeadingConsult } from "../../components/headingConsult";
import { FeaturesCard } from "../../components/featuresCard";
import { Footer } from "../../components/footer";
import Bg_Decor_Plus from "../../images/bg_decor_plus.webp";
import Bg_Decor_Dots from "../../images/bg_decor_dots.webp";
import Bg_Decor_Area from "../../images/bg_decor_area.webp";

export const MainLayout = () => {
  return (
    <>
      <img
        src={Bg_Decor_Plus}
        alt="decor"
        className="absolute -top-10 left-40 w-20"
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
        <Footer />
      </div>
    </>
  );
};
