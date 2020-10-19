import { createResult } from "@/utils/jsonResult";
import { RunnerRT } from "meos-api-helper/lib/types";

export function api(data: data) {
  const arr = [];
  for (const runner of data.result) {
    arr.push(createResult(runner, data.result[0].runTime));
  }
  console.log(arr);
}

type data = {
  className: string;
  control: string;
  result: RunnerRT[];
};
