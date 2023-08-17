import React from "react";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StepContext from "./StepContext";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StepContext>
    <RouterProvider router={router} />
  </StepContext>
);
