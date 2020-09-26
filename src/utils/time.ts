import { Time } from "@/utils/types";

function calcTime(time: number): Time {
  time /= 10;
  return {
    hours: Math.floor(time / 3600),
    minutes: Math.floor((time % 3600) / 60),
    seconds: Math.floor((time % 3600) % 60)
  };
}

function addZero(num: number): string {
  return num <= 9 ? `0${num}` : num.toString();
}

export function calcStartTime(st: number): Time {
  return calcTime(st);
}

export function calcSeconds(time: Time): number {
  const { hours, minutes, seconds } = time;
  return hours * 60 * 60 + minutes * 60 + seconds;
}

function calcDifference(time1: Time, time2: Time): Time {
  const diff = calcSeconds(time1) - calcSeconds(time2);
  return calcTime(diff * 10);
}

export function stringTime(time: Time): string {
  const { hours, minutes, seconds } = time;
  let timeString: string;
  if (hours != 0) {
    timeString = `${hours}:${addZero(minutes)}:${addZero(seconds)}`;
  } else if (minutes != 0) {
    if (seconds < 0) {
      timeString = `${minutes - 1}:${addZero(seconds)}`;
    } else {
      timeString = `${minutes}:${addZero(seconds)}`;
    }
  } else {
    timeString = seconds.toString();
  }
  return timeString;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function estimatedTime(startTime: Time): Time {
  const timeNow = new Date();
  const currentTime = {
    hours: timeNow.getHours(),
    minutes: timeNow.getMinutes(),
    seconds: timeNow.getSeconds()
  } as Time;
  return calcDifference(currentTime, startTime);
}
