import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { bgColorSwitch } from "../lib/utils";

const BuildCard = dynamic(() => import("../components/BuildCard"), {
  ssr: false,
});

interface OptionsProps {}
const Options: React.FC<OptionsProps> = (props) => {
  const router = useRouter();
  const { route, cpu, gpu, ram } = router.query;

  return (
    <div
      className={`flex items-center w-full flex-col pt-12`}
    >
      <h1 className="font-title text-5xl font-bold text-gray-800 mb-16  dark:text-gray-100">
        המחשב
      </h1>
      <BuildCard
        cpu={parseInt(cpu as string)}
        gpu={parseInt(gpu as string)}
        ram={parseInt(ram as string)}
        route={route as string}
      ></BuildCard>
    </div>
  );
};

export default Options;
