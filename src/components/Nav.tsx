export default function Nav() {
  return (
    <nav className="px-4 py-2 flex justify-between">
      <a href="/" className="font-bold text-xl font">
        Blog App
      </a>
      <a
        href="/post"
        className="underline hover:text-blue-500 hover:decoration-dashed"
      >
        Post a Blog
      </a>
    </nav>
  );
}
