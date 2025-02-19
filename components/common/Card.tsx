import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => (
  <div className="border rounded-lg shadow-md p-4">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-md"
    />
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
