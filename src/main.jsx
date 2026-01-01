import "@radix-ui/themes/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./Container/App";

createRoot(document.getElementById("root")).render(
  <App/>
);
