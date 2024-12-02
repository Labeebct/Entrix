import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="flex z-50 sticky top-0 bg-gray-200 justify-between px-4 md:px-6 lg:px-8 xl-10 w-full items-center h-[80px]">
      <div className="flex flex-1">
      <div className="flex bg-white  text-[.9rem] w-full max-w-[370px] p-2 rounded-sm  shadow-md  gap-1">
        <SearchIcon className="cursor-pointer" sx={{ color: "gray" }} />
        <input
          type="text"
          placeholder="Enter your search request here....."
          className="outline-none bg-transparent w-full"
        />
      </div>
      </div>
      <div className="flex flex-1 justify-end items-center gap-5">
        <img src="/assets/adjust-iconp.png" className="w-6 h-6" alt="" />
        <button className="py-3 px-4 active:scale-[.95] duration-100 ease-in-out shadow-xl bg-red-500 text-white font-inter font-semibold rounded-md text-[.76rem] md:text-[.84rem] lg:text-[.87rem]">
          Go to Premium
        </button>
      </div>
    </div>
  );
};

export default Header;
