import React from 'react';

interface PillProps {
    label: string;
    onClick: () => void;
    isSelected: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isSelected }) => {
    return (
        <button
      onClick= { onClick }
    className = {`px-4 py-2 rounded-full focus:outline-none 
        ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'} 
        hover:bg-blue-500 hover:text-white`}
    >
    { label }
    </button>
  );
};

export default Pill;
