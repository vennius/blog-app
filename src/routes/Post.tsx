import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Nav from "../components/Nav";

type Post = {
  id: number | string;
  title: string;
  // releaseDate: string;
  views: string | number;
  content: string;
};

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

const fetcher = async (url: string) => {
  const res = await api.get(url);
  return res.data;
};

export default function Post() {
  const { postId } = useParams();
  const { data, isLoading } = useSWR<Post>(`/posts/${postId}`, fetcher);
  console.log(data);
  return (
    <div>
      <Nav />
      <div className="mx-3">
        <h1 className="text-xl font-semibold mt-4">{data?.title}</h1>
        <div className="text-xl font-light mb-4">Views: {data?.views}</div>
        <article className="mb-8">{data?.content}</article>
      </div>
    </div>
  );
}
