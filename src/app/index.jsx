import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./providers/RouterProvider";
import "../app/styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/dm-sans";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
