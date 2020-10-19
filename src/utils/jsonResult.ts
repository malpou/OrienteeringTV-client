import { RunnerRT, Time } from "meos-api-helper/lib/types";
import { Difference, Time2Sec } from "meos-time-helper";
import { shortenName } from "./shortenName";
import { timeString } from "./timeString";

export function createResult(runner: RunnerRT, bestTime: Time): json {
  return {
    PLACE: runner.place !== null ? runner.place.toString() : " ",
    NAME: shortenName(runner.name),
    TIME:
      runner.place !== null
        ? runner.place !== 1
          ? `+${timeString(Difference(bestTime, runner.runTime))}`
          : timeString(runner.runTime)
        : Time2Sec(runner.runTime) < Time2Sec(bestTime)
        ? `-${timeString(Difference(runner.runTime, bestTime))}`
        : `+${timeString(Difference(bestTime, runner.runTime))}`
  };
}

type json = {
  PLACE: string;
  NAME: string;
  TIME: string;
};
