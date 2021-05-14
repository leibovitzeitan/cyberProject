import React, { useState } from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { src, onClick } = props;
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`relative rounded-3xl bg-white shadow-xl m-4 w-1/6 overflow-hidden hover:scale-110 transform transition duration-300 dark:bg-gray-800 ${
        selected && ""
      }`}
      onClick={(e) => {
        setSelected(!selected);
        onClick(e)
      }}
    >
      <Image
        src={src}
        layout="responsive"
        width="1"
        height="1"
        objectFit="cover"
      />
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

export default ImageCard;
