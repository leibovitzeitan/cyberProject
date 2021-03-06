import Link from "next/link";
import React from "react";
import { useAppDispatch } from "../lib/hooks";
import { changeBg } from "../lib/slices/pathSlice";

interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
  return (
    <div
      className={`flex items-center w-full flex-col pt-12`}
    >
      <h1 className="font-title text-5xl font-bold text-gray-800 mb-16 dark:text-gray-100">
        מה השימוש שלך במחשב?
      </h1>
      <div className="flex justify-between items-start w-full mx-auto max-w-7xl">
        <Card
          title="נטפליקס וצ'יל"
          color1="from-red-700"
          color2="to-red-400"
          bgColor="bg-red-100  dark:bg-red-900"
          link="/applications-games?route=netflix_and_chill"
        >
          מחשב לצרכים קלים עד בנוניים.
          <br />
          שיחות וידאו, משחקים קלים, גלישה באינטרנט וגיימינג קל ביותר.
          <br />
          מחשב שמטרתו העיקרית היא לחבר אדם אל האינטרנט והטכנולוגיה.
        </Card>
        <Card
          title="משחקאי מעת לעת"
          color1="from-blue-600"
          color2="to-purple-600"
          bgColor="bg-blue-100  dark:bg-blue-900"
          link="/applications-games?route=normie"
        >
          מחשב לצרכים בינוניים עד גבוהים.
          <br />
          משחקים יותר מתקדמים ממיינקראפט וLoL בהגדרות בינוניות עד גבוהות
          ברזולוציית מסך של 1920X1080
          <br />
          עריכה, קידוד, רינדור ומידול באופן נוח ברוב המקרים
          <br />
          לא ממשכן את הבית אבל מביא תוצאות שיספקו את רוב הגיימרים הקלים והאנשים
          בכלל.
        </Card>
        <Card
          title="בחור מכור"
          color1="from-green-700"
          color2="to-green-400"
          bgColor="bg-green-100  dark:bg-green-900"
          link="/applications-games?route=addicted_guy"
        >
          מחשב ברמה הגבוהה ביותר.
          <br />
          המשחקים החדשים ביותר, עריכה בתוכנות מתקדמות, מידול ואנימציה.
          <br />
          רזולוציות מסך גבוהות והגדרות מקסימליות ברוב המשחקים.
          <br />
          יקר ולא מתאים לכל האנשים.
        </Card>
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  color1: string;
  color2: string;
  bgColor: string;
  link: string;
}

const Card: React.FC<CardProps> = (props) => {
  const dispatch = useAppDispatch();
  return (
    <Link href={`${props.link}`}>
      <a>
        <div
          className="bg-white rounded-2xl shadow-xl p-6 max-w-sm hover:scale-110 transform transition duration-300 dark:bg-gray-800"
          onMouseEnter={() => dispatch(changeBg(props.bgColor))}
          onMouseLeave={() => dispatch(changeBg(null))}
        >
          <h1
            className={`text-6xl mb-4 font-black font-title text-transparent bg-clip-text bg-gradient-to-br ${props.color1} ${props.color2} text-center`}
          >
            {props.title}
          </h1>
          <p className="text-2xl text-gray-500 font-medium text-right dark:text-gray-300">
            {props.children}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Home;
