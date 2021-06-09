import { useEffect, useState } from "react";
import { BaseItem } from "../lib/types";
import { autoMakePc, itemLink, PC } from "../lib/utils";

interface BuildCardProps {
  cpu: number;
  gpu: number;
  ram: number;
  route: string;
}

const BuildCard: React.FC<BuildCardProps> = ({ cpu, gpu, ram, route }) => {
  const [price, setPrice] = useState(0);
  const [pc, setPc] = useState<PC>();
  useEffect(() => {
    autoMakePc(cpu, gpu, ram, route).then((pc) => {
      setPc(pc);
      setPrice(
        Object.values(pc)
          .filter((item) => item)
          .map((item: BaseItem) => Math.min(...Object.values(item.price)))
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      );
    });
  }, []);
  if (pc) {
    return (
      <div className="bg-white rounded-2xl shadow-xl flex items-stretch w-full mx-auto max-w-7xl overflow-hidden">
        <div className="bg-gray-100 p-6 dark:bg-gray-800 flex-grow">
          <h1 className="text-6xl mb-24 pt-8 font-black font-title text-transparent bg-clip-text text-gray-600 text-center">
            {price}&#8362;
          </h1>
          <div className="text-2xl text-gray-500 font-medium text-right dark:text-gray-300 pr-4">
            <ul className="list-disc">
              {Object.values(pc)
                .filter((item) => item)
                .map((item: BaseItem, i) => (
                  <li key={i}>
                    <a href={itemLink(item)} target='_blank'>{item.model}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="p-10 flex-grow-0">
          <img
            src={`https://img.ksp.co.il/item/${pc.pcase.storeId.ksp}/b_1.jpg`}
          />
        </div>
      </div>
    );
  } else {
    return (
      <h1 className="text-6xl mb-24 pt-8 font-black font-title text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-800 text-center">
        Loading...
      </h1>
    );
  }
};

export default BuildCard;
