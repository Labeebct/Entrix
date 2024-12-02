import React from "react";

const BestRecipe = () => {
  return (
    <div className="w-full py-3 mb-8  h-auto flex items-center justify-between">
      <div className="hidden md:flex flex-2 justify-center items-center">
        <img src="/assets/cooking.png" className="lg:w-36 md:w-28 w-20 h-auto" alt="" />
      </div>
      <div className="flex-1">
      <div className="flex flex-col gap-3 justify-center px-10 py-2">
          <h2 className="font-bold font-playfair xl:text-[2.5rem] lg:text-[2rem] md:text-[1.8rem] text-[1.4rem]">Only the best recipes!</h2>
          <p className="font-inter text-gray-500 text-[.9rem]">Todays new recipes for you</p>
        </div>
      </div>
      <div className="flex flex-2 justify-end">
        <div className="flex flex-col justify-center items-center py-2 px-3 md:px-3 lg:px-4 xl:px-5">
          <h2 className="font-bold font-playfair xl:text-[2.5rem] lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]">168</h2>
         <p className="font-inter text-gray-500 xl:text-[.9rem] lg:text-[.86rem] md:text-[.83rem] text-[.8rem]">Totorials</p>
        </div>
        <div className="flex flex-col justify-center items-center py-2 px-3 md:px-3 lg:px-4 xl:px-5 border-l-2 border-l-gray-300">
          <h2 className="font-bold font-playfair xl:text-[2.5rem] lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]">304</h2>
          <p className="font-inter text-gray-500  xl:text-[.9rem] lg:text-[.86rem] md:text-[.83rem] text-[.8rem]">Recipes</p>
        </div>
      </div>
    </div>
  );
};

export default BestRecipe;
