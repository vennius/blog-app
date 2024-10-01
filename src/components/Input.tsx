type InputProps = {
  placeholder: string;
  type: string;
  name?: string;
  id?: string;
  value: string;
  onChange: (e: React.MouseEvent<HTMLInputElement>) => void;
};

export default function Input({
  placeholder,
  type,
  name = "",
  id = "",
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 rounded-lg border-2 bg-gray-50 w-full focus:ring-1 focus:ring-gray-950 focus:outline-none"
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
}
