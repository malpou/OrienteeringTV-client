import { Runner } from "meos-api-helper/lib/types";

export function api(data: data) {
  console.log(data);
}

type data = {
  className: string;
  control: string;
  result: Runner[];
};
