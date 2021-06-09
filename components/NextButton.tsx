import React from "react";
import Link from "next/link";
import { ParsedUrlQueryInput } from "node:querystring";

interface NextButtonProps {
  text: string;
  bgColor: string;
  link: string;
  disabled: boolean;
  query: string | ParsedUrlQueryInput;
}

const NextButton: React.FC<NextButtonProps> = (props) => {
  const { disabled, link, bgColor, query } = props;
  if (disabled) {
    return (
      <div
        className={`relative rounded-3xl ${bgColor} shadow-xl m-4 overflow-hidden hover:scale-110 transform transition duration-300 `}
      >
        <div className="text-gray-900 p-5 text-4xl font-black font-title bg-clip-text text-center dark:text-gray-100">
          {props.text}
        </div>
      </div>
    );
  }
  return (
    <Link href={{
      pathname: link,
      query
      }}>
      <a>
        <div
          className={`relative rounded-3xl ${bgColor} shadow-xl m-4 overflow-hidden hover:scale-110 transform transition duration-300 `}
        >
          <div className="text-gray-900 p-5 text-4xl font-black font-title bg-clip-text text-center dark:text-gray-100">
            {props.text}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NextButton;
