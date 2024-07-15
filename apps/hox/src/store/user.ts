import { useState } from "react";
import { createGlobalStore } from "hox";

export const [useUseStore, getUserStore] = createGlobalStore(() => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function changeName(name: string) {
    setName(name);
  }

  function changeAge(age: number) {
    setAge(age);
  }

  return {
    name,
    age,
    changeName,
    changeAge,
  };
});
