import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import PostCard from "../components/PostCard";
import axios from "axios";

type Post = {
  id: number | string;
  title: string;
  releaseDate: string;
  views: string | number;
  content: string;
};

function Root() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3000/posts");
      const data: Post[] = res.data;
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Nav />
      <div>
        <div className="flex flex-wrap gap-2 mx-auto my-2 w-[95%] place-content-center justify-normal items-center">
          {posts.map((el) => (
            <PostCard
              id={el.id}
              title={el.title}
              releaseDate={el.releaseDate}
              views={el.views}
              preview={el.content.substring(0, 40)}
              key={el.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Root;
