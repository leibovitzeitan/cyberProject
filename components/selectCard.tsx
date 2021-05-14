import React from "react";

interface SelectCardProps {
  text: string;
  bgColor: string;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const SelectCard: React.FC<SelectCardProps> = (props) => {
  const {text, bgColor, selected, onClick} = props
  return (
    <div
      className={`relative rounded-3xl bg-${bgColor} shadow-xl m-4 w-1/6 overflow-hidden hover:scale-110 transform transition duration-300 dark:bg-gray-800 ${selected && ""}`}
      onClick={onClick}
    >
      <div className="text-white py-20 text-6xl font-black font-title bg-clip-text text-center text">
        {text}
      </div>
      <div
        className={`p-8 transition duration-100 absolute inset-y-0 h-full w-full bg-black bg-opacity-40 ${
          !selected && "opacity-0"
        }`}
      >
        <svg
          className="stroke-current text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFFFFF"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectCard;
