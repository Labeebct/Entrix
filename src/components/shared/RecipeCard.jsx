import React from "react";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import Rating from "@mui/material/Rating";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="relative w-72 h-[390px] shadow-box p-4 bg-white rounded-xl">
      <div className="flex flex-col gap-6 items-center">
        <div className="w-24 h-24 absolute -top-14 rounded-full">
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

        <Rating defaultValue={recipe.rating} readOnly />
        <button className="w-full absolute bottom-0 left-0 right-0 py-4 mt-2 text-sm font-bold font-inter text-[1.1rem] border-t text-gray-700 flex items-center justify-center gap-2">
          Start cooking
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
