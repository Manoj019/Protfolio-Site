import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContactPage from "./ContactPage";
import App from "./App";

// Create your router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contactpage",
    element: <ContactPage />,
  },
]);

// Get the root element safely
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
} else {
  console.error("Failed to find the root element");
}
