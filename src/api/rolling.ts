import { RunnerRT } from "meos-api-helper/lib/types";

export function api(data: data) {
  console.clear();
  for (const iterator of data.result) {
    console.log(
      `${iterator.place === null ? "place" : iterator.place}  - ${
        iterator.name
      }    - ${iterator.runTime.minutes}:${iterator.runTime.seconds}`
    );
  }
}

type data = {
  className: string;
  control: string;
  result: RunnerRT[];
};
