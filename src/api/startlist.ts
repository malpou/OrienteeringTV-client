import { createStartlist } from "@/utils/jsonStart";
import { RunnerST } from "meos-api-helper/lib/types";

export function api(data: data) {
  const arr = [];
  for (const runner of data.startlist) {
    arr.push(createStartlist(runner));
  }
  console.log(arr);
}

type data = {
  className: string;
  startlist: RunnerST[];
};
