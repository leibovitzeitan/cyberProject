import React from "react";
import { useAppSelector } from "../lib/hooks";
import { selectBgColor } from "../lib/slices/pathSlice";
import ImageCard from "../components/ImageCard";

interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
  const bgColor = useAppSelector(selectBgColor);
  return (
    <div
      className={`flex items-center min-h-screen w-full transition duration-300 bg-${bgColor} flex-col pt-40 dark:bg-gray-900`}
    >
      <h1 className="font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100">
        באילו משחקים ותוכנות אתה משתמש?
      </h1>
      <div className="flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl">
      <ImageCard src="/images/Microsoft-Word-Logo.png" />
      <ImageCard src="/images/powerpoint.png" />
      <ImageCard src="/images/Microsoft-Excel-Logo.jpg" />
      <ImageCard src="/images/Google-Chrome-logo.png" />
      <ImageCard src="/images/microsoftedgenewlogo.5.jpg" />
      <ImageCard src="/images/minecraft.jpg" />
      <ImageCard src="/images/lol.jpg" />
      <ImageCard src="/images/Rocket_League_coverart.jpg" />
      <ImageCard src="/images/among-us-font.jpg" />
      <ImageCard src="/images/fortnite.png" />
      <ImageCard src="/images/valorant.png" />
      <ImageCard src="/images/cyberpunk.jpg" />
      <ImageCard src="/images/gtaV.png" />
      <ImageCard src="/images/watchdogs2.jpg" />
      <ImageCard src="/images/half_life_alyx.jpg" />
      <ImageCard src="/images/far-cry-5.jpg" />
      <ImageCard src="/images/f12020.jpg" />
      <ImageCard src="/images/warzone.jpg" />
      <ImageCard src="/images/doom.jpg" />
      <ImageCard src="/images/rhr2.jpg" />
      </div>
    </div>
  );
};

export default Home;