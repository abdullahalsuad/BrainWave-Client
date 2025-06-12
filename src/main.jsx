import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import router from "./routes/router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/AuthProvider.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ArticlesProvider from "./context/ArticlesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ArticlesProvider>
          <RouterProvider router={router} />
        </ArticlesProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
