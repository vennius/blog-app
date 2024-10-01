import React from "react";

export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className="mt-3 bg-gray-950 text-white px-4 py-1 rounded mb-1"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
