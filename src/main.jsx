import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RecipeProvider from "./context/RecipeData";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RecipeProvider>
        <Analytics />
        <App />
      </RecipeProvider>
    </BrowserRouter>
  </StrictMode>
);
