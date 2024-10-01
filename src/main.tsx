import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./routes/Post";
import PostBlog from "./routes/PostBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/post/:postId",
    element: <Post />,
  },
  {
    path: "/post",
    element: <PostBlog />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
