import { useState } from "react";
import Nav from "./components/Nav";
import PostCard from "./components/PostCard";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Nav />
      <div className="flex flex-wrap gap-2 mx-2 my-2 justify-center sm:justify-normals">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default App;
