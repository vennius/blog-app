import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./routes/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/post/:postId",
    element: <Post />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
