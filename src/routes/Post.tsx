import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  return (
    <div>
      <h1>Hello world</h1>
      {postId}
    </div>
  );
}
