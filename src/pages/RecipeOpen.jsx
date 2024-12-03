import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipes } from "../context/RecipeData";

const RecipeOpen = () => {
  const [openedRecipe, setOpenedRecipe] = useState(null); // Initial state is null
  const params = useParams();
  const recipes = useRecipes();

  useEffect(() => {
    if (recipes && recipes.length > 0) {
      const recipe = recipes.find((recipe) => recipe.id == params.id);
      setOpenedRecipe(recipe);
      console.log(recipe);
    }
  }, [recipes, params.id]); // Add dependencies to re-run when recipes change

  if (!openedRecipe) {
    return <p>Loading recipe...</p>; // Show a loading state
  }

  return (
    <div className="flex p-10 flex-col gap-10 w-full h-auto justify-center items-center">
      <img
        src={openedRecipe.image}
        className="w-64 h-auto"
        alt={openedRecipe.name}
      />
      <div>
        <h2 className="text-[2rem] font-bold">{openedRecipe.name}</h2>
        {openedRecipe.instructions.map((ins) => (
          <p className="my-2">{ins}</p>
        ))}
      </div>
    </div>
  );
};

export default RecipeOpen;
