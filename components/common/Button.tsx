import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    {text}
  </button>
);

export default Button;
