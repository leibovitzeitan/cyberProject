import React, { useState } from "react";
import ImageCard from "../components/ImageCard";
import { useRouter } from "next/router";
import NextButton from "../components/NextButton";
import games, { Game } from "../lib/games";

function routeSwitch(route) {
  switch (route) {
    case "addicted_guy":
      return [
        games[0],
        games[1],
        games[2],
        games[3],
        games[4],
        games[5],
        games[6],
        games[7],
        games[8],
        games[9],
        games[10],
        games[11],
        games[12],
        games[13],
        games[14],
        games[15],
        games[16],
        games[17],
        games[18],
        games[19],
      ];
    case "normie":
      return [];
    case "netflix_and_chill":
      return [
        games[20],
        games[21],
        games[22],
        games[23],
        games[24],
        games[25],
        games[26],
        games[27],
        games[15],
        games[16],
        games[17],
        games[18],
      ];
    default:
      return [];
  }
}

function bgColorSwitch(route) {
  switch (route) {
    case "addicted_guy":
      return "green-100";
    case "normie":
      return "blue-100";
    case "netflix_and_chill":
      return "red-100";

    default:
      return "";
  }
}

function calculateScore(apps: Game[], selected: boolean[]) {
  const selectedGames = selected
    .map((item, i) => (item ? apps[i] : null))
    .filter((item) => item);
  const cpuScore = Math.max(...selectedGames.map((item) => item.cpuScore));
  const gpuScore = Math.max(...selectedGames.map((item) => item.gpuScore));
  const ramScore = Math.max(...selectedGames.map((item) => item.ramAmount));
  return { cpu: cpuScore, gpu: gpuScore, ram: ramScore };
}

interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
  const router = useRouter();
  const { route } = router.query;
  const apps = routeSwitch(route);
  const [selected, setSelected] = useState(new Array(0));
  if (route && selected.length === 0)
    setSelected(new Array(apps.length).fill(false));

  const bgColor = bgColorSwitch(route);
  return (
    <div
      className={`flex items-center min-h-screen w-full transition duration-300 bg-${bgColor} flex-col pt-40 dark:bg-gray-900`}
    >
      <h1 className="font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100">
        באילו משחקים ותוכנות אתה משתמש?
      </h1>
      <div className="flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl">
        {apps.map((item, i) => (
          <ImageCard
            src={item.image}
            key={i}
            onClick={() => {
              setSelected(
                selected.map((app, index) => (index === i ? !app : app))
              );
            }}
          />
        ))}
      </div>
      <NextButton
        disabled={selected.every((app) => app === false)}
        text="מעבר לדף הבא"
        bgColor="gray-50"
        link="/resolution"
        query={{ route, ...calculateScore(apps, selected) }}
      ></NextButton>
    </div>
  );
};

export default Home;
