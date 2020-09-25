export type ClassInfo = {
  id: number;
  name: string;
  radios: string[];
};

export type Result = {
  runner: Runner;
  result: Time;
};

export type Runner = {
  id: number;
  name: string;
  startTime: Time;
};

export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};
