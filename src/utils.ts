import { RP } from "discord-rich-presence";
import { TRPC } from "./@types/response";

export function timeToMilli(time: string) {
  var temp = Date.now();
  if (time.split(":").length == 2) {
    temp += Math.round(+time.split(":")[0] * 60000);
    temp += Math.round(+time.split(":")[1] * 1000);
  } else if (time.split(":").length == 3) {
    temp += Math.round(+time.split(":")[0] * 3600000);
    temp += Math.round(+time.split(":")[1] * 60000);
    temp += Math.round(+time.split(":")[2] * 1000);
  }
  return temp;
}

export const convertToMilliseconds = (timeFormat: string): number => {
  const [minutesStr, secondsStr] = timeFormat.split(":");

  const minutes = parseInt(minutesStr, 10);
  const seconds = parseInt(secondsStr, 10);

  const totalMilliseconds = (minutes * 60 + seconds) * 1000;

  console.log("🚀 ------------------------------------------------------------------🚀");
  console.log("🚀 ~ convertToMilliseconds ~ timeFormat:", timeFormat);
  console.log("🚀 ~ convertToMilliseconds ~ totalMilliseconds:", totalMilliseconds);
  console.log("🚀 ------------------------------------------------------------------🚀");


  return totalMilliseconds;
};