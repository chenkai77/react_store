import { atom, selector } from "recoil";

export const nameState = atom({
  key: "nameState", // Atom 需要一个唯一的 key 值，请确保它们在全局上的唯一性
  default: "",
});

export const ageState = atom({
  key: "ageState", // Atom 需要一个唯一的 key 值，请确保它们在全局上的唯一性
  default: 0,
});

export const introductionState = selector({
  key: "introductionState",
  get: ({ get }) => {
    const name = get(nameState);
    const age = get(ageState);
    return `${name}今年${age}岁了`;
  },
});
