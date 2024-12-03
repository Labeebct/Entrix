import React from "react";
import BestRecipe from "../components/home/BestRecipe";
import RecipeCard from "../components/shared/RecipeCard";
import Mentorship from "../components/home/Mentorship";
import { useRecipes } from "../context/RecipeData";


const Home = () => {
    // Context Data
    const recipes = useRecipes();
    
  return (
    <div className="bg-[#fcf4f1] ml-[60px] md:ml-0 overflow-y-auto h-full flex-1 grid grid-cols-1">
    <div className="px-5 mb-5">
      <BestRecipe />
      <div className="grid gap-y-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {/* Looping all recipe datas */}
        {recipes.slice(0, 3).map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index} />
        ))}
        <Mentorship />
        {recipes.slice(3).map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index + 3} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
