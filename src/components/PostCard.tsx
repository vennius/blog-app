export default function PostCard({
  id,
  title,
  releaseDate,
  views,
  preview,
}: {
  id: number | string;
  title: string;
  releaseDate: string;
  views: string | number;
  preview: string;
}) {
  return (
    <div className="w-72 border-2 rounded-xl p-2 hover:bg-gray-950 hover:text-white transition-colors">
      <a href={`/post/${id}`}>
        <div className="text-2xl font-semibold">{title}</div>
        <div className="font-light">{releaseDate}</div>
        <div className="font-light mb-1">Views: {views}</div>
        <div>{preview}...</div>
      </a>
    </div>
  );
}
