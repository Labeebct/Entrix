import React from "react";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import Rating from "@mui/material/Rating";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="group cursor-pointer relative mt-10 hover:-translate-y-5 duration-300 ease-in-out flex-1 min-w-[280px] h-[380px] shadow-box p-4 bg-white rounded-xl">
      <div className="flex flex-col gap-6 items-center">
        <div className="w-[85px] h-[85px] z-20 absolute -top-12 rounded-full">
          <img
            src={recipe.image}
            alt="Noodle chicken soup"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="text-center mt-12">
          <h3 className="font-bold font-inter mb-4 text-[1.4rem] text-gray-800">
            {recipe.name}
          </h3>
          <span className="text-sm font-semibold font-inter text-orange-500 bg-amber-50 p-2 px-3 rounded-md">
            {recipe.difficulty}
          </span>
        </div>

        <div className="flex justify-center gap-6 w-full">
          <div className="flex flex-col justify-between gap-2  items-center">
            <span className="font-bold font-inter text-[2rem]">
              {recipe.cookTimeMinutes}
            </span>
            <span className="text-xs font-medium text-gray-500">Min</span>
          </div>
          <div className="flex flex-col justify-between gap-2  items-center">
            <span className="font-bold font-inter text-[2rem]">
              {recipe.caloriesPerServing}
            </span>
            <span className="text-xs font-medium text-gray-500">Kcal</span>
          </div>
          <div className="flex justify-center flex-col gap-2  items-center">
            <KebabDiningIcon sx={{ fontSize: 27 }} />
            <span className="text-xs font-medium translate-y-2 text-gray-500">
              {recipe.mealType[0]}
            </span>
          </div>
        </div>
        <div className="flex justify-center  items-center absolute bottom-20 left-0 right-0">
          <Rating defaultValue={Math.floor(recipe.rating)} readOnly />
        </div>
        <button className="w-full group-hover:bg-red-500  absolute bottom-0 left-0 right-0 py-5 mt-2 text-sm font-bold font-inter text-[1.1rem] border-t  text-black group-hover:text-white flex items-center justify-center gap-2">
          Start cooking
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
