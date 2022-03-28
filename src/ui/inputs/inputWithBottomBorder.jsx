import React from "react";
import clsx from "clsx";

export const InputWithBottomBorder = ({ name, style }) => {
  return (
    <div
      className={clsx(
        "mt-1 border-b border-black focus-within:border-indigo-600",
        style
      )}
    >
      <input
        type="text"
        name={name}
        id={name}
        className="block min-h-[40px] w-full border-0 border-transparent bg-transparent outline-0 focus:border-none sm:text-sm"
        placeholder={name}
      />
    </div>
  );
};
