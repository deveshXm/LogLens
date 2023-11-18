import { ChangeEvent, FC } from "react";

interface InputProps {
  label: string;
  value?: string;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ label, value = "", onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="w-[50vw] outline-none p-2 border rounded-md border-gray-800"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={label}
    />
  );
};

export default Input;
