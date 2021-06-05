import { useRouter } from "next/router";
import React, { useState } from "react";
import NextButton from "../components/NextButton";
import SelectCard from "../components/selectCard";
import { bgColorSwitch } from "../lib/utils";

function selectedSwitch(selectionNum, cpu, gpu, ram) {
  switch (selectionNum) {
    case 1:
      return { cpu, gpu, ram }; //1080
    case 2:
      return { cpu: parseInt(cpu) + 100, gpu: parseInt(gpu) + 500, ram }; //1440
    case 3:
      return { cpu: parseInt(cpu) + 300, gpu: parseInt(gpu) + 1200, ram }; //4K

    default:
      return "";
  }
}

interface ResProps {}
const Res: React.FC<ResProps> = (props) => {
  const [selected, setSelected] = useState(0);
  const router = useRouter();
  const { route, cpu, gpu, ram } = router.query;

  const bgColor = bgColorSwitch(route);

  return (
    <div
      className={`flex items-center min-h-screen w-full transition duration-300 ${bgColor} flex-col pt-40 dark:bg-gray-900`}
    >
      <h1 className="font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100">
        באיזו רזולוצייה המסך שלך?
      </h1>
      <div className="flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl">
        <SelectCard
          text="1080p"
          bgColor="bg-red-400"
          selected={selected == 1}
          onClick={() => setSelected(1)}
        ></SelectCard>
        <SelectCard
          text="1440p"
          bgColor="bg-blue-400"
          selected={selected == 2}
          onClick={() => setSelected(2)}
        ></SelectCard>
        <SelectCard
          text="4K"
          bgColor="bg-green-400"
          selected={selected == 3}
          onClick={() => setSelected(3)}
        ></SelectCard>
      </div>
      <br />
      <NextButton
        disabled={selected == 0}
        text="מעבר לדף הבא"
        bgColor="bg-gray-50"
        link="/lifespan"
        query={{ route, ...selectedSwitch(selected, cpu, gpu, ram) }}
      ></NextButton>
    </div>
  );
};

export default Res;
