import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Main/Home";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home />}
    ],
  },
]);

export default router;
