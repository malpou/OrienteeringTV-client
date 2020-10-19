import { createResult } from "@/utils/jsonResult";
import { RunnerRT } from "meos-api-helper/lib/types";

export function api(data: data) {
  const arr = [];
  const length = data.result.length;
  for (let x = 0; x < length; x++) {
    const runner = data.result[x];
    arr.push(createResult(runner, data.result[0].runTime));
  }
  console.log(arr);
}

type data = {
  className: string;
  control: string;
  result: RunnerRT[];
};
