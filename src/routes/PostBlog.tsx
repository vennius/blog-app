import { useState } from "react";
import Input from "../components/Input";
import Nav from "../components/Nav";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center my-4 gap-4"
      >
        <div className="flex flex-col w-[90%] gap-1">
          <label htmlFor="post-title" className="font-semibold text-xl mx-1">
            Title
          </label>
          <Input
            type="text"
            placeholder="Title for your post..."
            id="post-title"
            name="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-[90%] gap-1">
          <label htmlFor="post-content" className="font-semibold text-xl mx-1">
            Content
          </label>
          <TextArea
            placeholder="Enter the content of your post"
            id="post-content"
            name="post-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <Button
          onClick={async (e) => {
            const res = await axios.post("http://localhost:3000/posts", {
              title,
              views: 10,
              content,
            });
            const data = res.data;
            if (res.status == 200) {
              navigate("/");
            }
          }}
        >
          Post
        </Button>
      </form>
    </>
  );
}
