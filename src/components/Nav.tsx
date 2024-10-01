import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="px-4 py-2 flex justify-between">
      <Link to="/" className="font-bold text-xl tracking-wider">
        Blog App
      </Link>
      <Link
        to="/post"
        className="underline hover:text-blue-500 hover:decoration-dashed"
      >
        Post a Blog
      </Link>
    </nav>
  );
}
