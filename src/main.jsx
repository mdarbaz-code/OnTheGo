// import "@radix-ui/themes/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Container/App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <App />
  // </StrictMode>
);
