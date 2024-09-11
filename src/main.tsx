import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "fictoan-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/globals.css";

import App from "./App.tsx";
import AboutPage from "./pages/about.tsx";

import { Header } from "./components/Header/Header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider currentTheme="theme-light">
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
