import React from "react";

export const InputWithBottomBorder = ({ name }) => {
  return (
    <div className="mt-1 border-b border-black focus-within:border-indigo-600">
      <input
        type="text"
        name={name}
        id={name}
        className="block bg-transparent min-h-[40px] w-full border-0 border-transparent outline-0 focus:border-none sm:text-sm"
        placeholder={name}
      />
    </div>
  );
};
