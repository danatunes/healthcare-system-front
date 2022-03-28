import React from "react";
import { InputWithBottomBorder } from "../../ui/inputs/inputWithBottomBorder";
import { TypesOfLogin } from "../../components";
import { Button } from "../../ui/button/button";

export const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="items-center text-4xl font-medium text-black">
          Sign In
        </h1>
        <p className="text-[#8A92A6]">Sign in to stay connected.</p>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <InputWithBottomBorder name="Email" />
        <InputWithBottomBorder name="Password" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="flex w-full flex-row justify-between">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="border-0" />
            <p className="text-[#8A92A6]">Remember me?</p>
          </div>
          <a href="#" className="text-[#458FF6]">
            Forgot Password
          </a>
        </div>
        <Button name="Sign in" />
        <p className="text-black">or sign in with other accounts?</p>
        <TypesOfLogin />
        <p className="text-black">
          Already have an Account{" "}
          <a className="text-[#458FF6]" href="#">
            Sign in
          </a>
        </p>
      </div>
    </>
  );
};
