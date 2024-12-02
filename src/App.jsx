import React from "react";
import Home from "./pages/Home";
import RecipeProvider from "./context/RecipeData";

const App = () => {
  return (
    <RecipeProvider >
      <Home />
    </RecipeProvider>
  );
};

export default App;
