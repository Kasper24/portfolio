import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./app";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
);
