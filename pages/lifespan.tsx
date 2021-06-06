import React, { useState } from "react";
import SelectCard from "../components/selectCard";
import { useRouter } from "next/router";
import NextButton from "../components/NextButton";
import { bgColorSwitch } from "../lib/utils";

function selectedSwitch(selectionNum, cpu, gpu, ram) {
  switch (selectionNum) {
    case 1:
      return { cpu, gpu, ram }; //1080
    case 2:
      return { cpu: parseInt(cpu) + 100, gpu: parseInt(gpu) + 300, ram }; //1440
    case 3:
      return { cpu: parseInt(cpu) + 300, gpu: parseInt(gpu) + 800, ram }; //4K

    default:
      return "";
  }
}

interface LifeSpanProps {}
const LifeSpan: React.FC<LifeSpanProps> = (props) => {
  const [selected, setSelected] = useState(0);
  const router = useRouter();
  const { route, cpu, gpu, ram } = router.query;

  return (
    <div
      className={`flex items-center w-full flex-col pt-12 dark:bg-gray-900`}
    >
      <h1 className="font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100">
        כמה שנים אתה מתכנן להשתמש במחשב שלך?
      </h1>
      <div className="flex flex-wrap justify-center items-start w-full mx-auto max-w-7xl">
        <SelectCard
          text="3 שנים"
          bgColor="bg-red-400"
          selected={selected == 1}
          onClick={() => setSelected(1)}
        ></SelectCard>
        <SelectCard
          text="6 שנים"
          bgColor="bg-blue-400"
          selected={selected == 2}
          onClick={() => setSelected(2)}
        ></SelectCard>
        <SelectCard
          text="9 שנים"
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
        link="/options"
        query={{ route, ...selectedSwitch(selected, cpu, gpu, ram) }}
      ></NextButton>
    </div>
  );
};

export default LifeSpan;
