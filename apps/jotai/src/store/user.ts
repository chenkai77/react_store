import { atom } from "jotai";

export const nameAtom = atom("");
export const ageAtom = atom(0);
// 只读 atom
export const introductionAtom = atom(
  (get) => `${get(nameAtom)}今年${get(ageAtom)}岁了`
);
// 只写 atom
export const changeNameAtom = atom(
  null, // 为第一个参数传递 `null` 是一种惯例
  (get, set, param: string) => {
    set(nameAtom, param);
  }
);
// 读写 atom
export const readWriteAgeAtom = atom(
  (get) => get(ageAtom) + "岁",
  (get, set, param: number) => {
    set(ageAtom, param);
  }
);
