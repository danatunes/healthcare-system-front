import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/solid";

export const Header = () => {
  return (
    <div className="flex w-full flex-row items-center justify-end space-x-8 font-montserrat">
      <div className="relative mt-1 w-1/3 rounded-md shadow-sm">
        <input
          type="text"
          name="search"
          id="search"
          className="w-full rounded-md border border-black p-3 text-sm"
          placeholder="Search"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <SearchIcon className="w-5" />
        </div>
      </div>
      <Link to="#" className="text-sm">
        Sign In
      </Link>
      <Link to="#" className="text-sm">
        Registration
      </Link>
    </div>
  );
};
