import { proxy } from "valtio";

export const user = proxy({
  name: "",
  age: 0,
});
