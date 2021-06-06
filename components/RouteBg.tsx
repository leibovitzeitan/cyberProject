import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import { selectBgColor, changeBg } from "../lib/slices/pathSlice";
import { bgColorSwitch } from "../lib/utils";

interface RouteBgProps {}
const RouteBg: React.FC<RouteBgProps> = (props) => {
  const bgColor = useAppSelector(selectBgColor);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { route } = router.query;
  const bgColorRoute = bgColorSwitch(route);
  useEffect(() => {
    dispatch(changeBg(bgColorRoute));
  }, [route]);
  return <div className={`transition duration-300 ${bgColor} min-h-screen`}>{props.children}</div>;
};

export default RouteBg;
