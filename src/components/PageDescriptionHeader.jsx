import React from "react";
import { NavLink } from "react-router";

const PageDescriptionHeader = ({pageName}) => {
  return (
    <div>
      <p className="text-center text-7xl mt-20">{pageName}</p>
      <div className="flex gap-4 text-xl justify-center mt-10 items-center">
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <div className="h-1 w-1 bg-[#fff] rounded-full"></div>
        <p className="text-[#C9F31D] underline underline-offset-2">{pageName}</p>
      </div>
    </div>
  );
};

export default PageDescriptionHeader;
