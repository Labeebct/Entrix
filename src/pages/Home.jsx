import React from "react";
import LeftBar from "../components/shared/LeftBar";
import Header from "../components/shared/Header";
import BestRecipe from "../components/home/BestRecipe";
import RecipeCard from "../components/shared/RecipeCard";
import { useRecipes } from "../context/RecipeData";

const Home = () => {
  const recipes = useRecipes();
  console.log(recipes);

  return (
    <div className="flex w-full h-screen">
      <LeftBar />
      <div className="bg-[#fcf4f1] h-full flex-1">
        <Header />
        <BestRecipe />
        <div className="flex mt-10 justify-around items-center w-full h-auto">
          {recipes.slice(0, 3).map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
