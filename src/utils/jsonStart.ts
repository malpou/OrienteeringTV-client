import { RunnerST } from "meos-api-helper/lib/types";
import { timeString } from "./timeString";

export function createStartlist(runner: RunnerST): jsonSta {
  return {
    NAME: runner.name,
    CLUB: runner.club.name,
    TIME: timeString(runner.startTime).slice(0, -3)
  };
}

export type jsonSta = {
  NAME: string;
  CLUB: string;
  TIME: string;
};
