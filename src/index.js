import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import ProjectDetail from "./pages/ProjectDetail";
import Trial from './components/Trial'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trial",
    element: <Trial />
  },
  {
    path: "/projects/:id",
    element: <ProjectDetail />
  }

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
