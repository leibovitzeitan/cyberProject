import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import dynamic from "next/dynamic";

const BuildCard = dynamic(() => import("../components/BuildCard"), {
  ssr: false,
});

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

interface OptionsProps {}
const Options: React.FC<OptionsProps> = (props) => {
  const router = useRouter();
  const { route, cpu, gpu, ram } = router.query;

  const bgColor = bgColorSwitch(route);

  return (
    <div
      className={`flex items-center h-screen w-full transition duration-300 bg-${bgColor} flex-col pt-40 dark:bg-gray-900`}
    >
      <h1 className="font-title text-5xl font-bold text-gray-800 mb-16  dark:text-gray-100">
        המחשב
      </h1>
      <BuildCard
        cpu={parseInt(cpu as string)}
        gpu={parseInt(gpu as string)}
        ram={parseInt(ram as string)}
        route = {route as string}
      >
      </BuildCard>
    </div>
  );
};

export default Options;
