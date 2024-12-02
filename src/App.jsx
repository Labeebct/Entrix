import React from "react";
import Home from "./pages/Home";
import RecipeProvider from "./context/RecipeData";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <RecipeProvider>
      <Analytics /> 
      <Home />
    </RecipeProvider>
  );
};

export default App;
