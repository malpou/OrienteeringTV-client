import { createStartlist } from "@/utils/jsonStart";
import { RunnerST } from "meos-api-helper/lib/types";

export function api(data: data) {
  const arr = [];
  const length = data.startlist.length;
  for (let x = 0; x < length; x++) {
    const runner = data.startlist[x];
    arr.push(createStartlist(runner));
  }
  console.log(arr);
}

type data = {
  className: string;
  startlist: RunnerST[];
};
