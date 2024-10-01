import React from "react";

type TextareaProps = {
  placeholder: string;
  name?: string;
  id?: string;
  value: string;
  onChange: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({
  placeholder,
  name = "",
  id = "",
  value,
  onChange,
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      className="p-2 rounded-lg border-2 bg-gray-50 w-full focus:ring-1 focus:ring-gray-950 focus:outline-none h-52"
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
}
