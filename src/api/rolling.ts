import { RunnerRT } from "meos-api-helper/lib/types";

export function api(data: RunnerRT[]) {
  console.clear();
  for (const iterator of data) {
    console.log(
      `${iterator.place === null ? "place" : iterator.place}  - ${
        iterator.name
      }    - ${iterator.runTime.minutes}:${iterator.runTime.seconds}`
    );
  }
}
