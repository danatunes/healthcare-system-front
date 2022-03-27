import React from "react";
import { InputWithBottomBorder } from "../../ui/inputs/inputWithBottomBorder";
import { TypesOfLogin } from "../../components";

export const SignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="items-center text-4xl font-medium text-black">
          Sign Up
        </h1>
        <p className="text-[#8A92A6]">Create your account</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <InputWithBottomBorder name="First Name" />
        <InputWithBottomBorder name="Last Name" />
        <InputWithBottomBorder name="Email" />
        <InputWithBottomBorder name="Phone No." />
        <InputWithBottomBorder name="Password" />
        <InputWithBottomBorder name="Confirm password" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="flex w-full items-center justify-center space-x-2">
          <input type="checkbox" className="border-0" />
          <p className="text-[#8A92A6]">I agree with the terms of use</p>
        </div>
        <button className="w-40 rounded bg-[#3A57E8] py-2 px-4 text-white hover:bg-blue-700">
          Sign up
        </button>
        <p className="text-black">or sign up with other accounts?</p>
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
