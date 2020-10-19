import { Time } from "meos-api-helper/lib/types";
import { addZero } from "./leadingZero";

export function timeString(time: Time): string {
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
