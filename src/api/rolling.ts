import { RunnerRT } from "meos-api-helper/lib/types";

export function api(data: RunnerRT[]) {
  /*for (const iterator of data) {
    console.log(
      `${iterator.place === undefined ? "place" : iterator.place}  - ${
        iterator.name
      }    - ${iterator.runTime.minutes}:${iterator.runTime.seconds}`
    );
    console.clear();
  
  }*/
  console.log(data);
}
