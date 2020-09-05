import { ClassInfo, Runner } from "@/utils/types";
import { calcStartTime } from "@/utils/time";
const parseString = require("xml2js").parseString;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getJSON(res: any): any {
  let returnValue = {};
  parseString(res.data, function(err: unknown, result: object) {
    returnValue = result;
  });
  return returnValue;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createClass(resClass: any): ClassInfo {
  const { id, radio } = resClass.$;
  return {
    id: +id,
    name: resClass._,
    radios: radio.split(",")
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createRunner(resRunner: any): Runner {
  const { _, $ } = resRunner.base[0];
  return {
    id: +resRunner.$.id,
    name: _,
    startTime: calcStartTime($.st)
  };
}
