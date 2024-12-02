import React, { createContext, useContext, useEffect, useState } from "react";

const ResipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = () => {
      fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data.recipes);
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
    };

    fetchRecipe();
  }, []);

  return (
    <ResipeContext.Provider value={recipes}>{children}</ResipeContext.Provider>
  );
};

export const useRecipes = () => {
  return useContext(ResipeContext);
};

export default RecipeProvider;
