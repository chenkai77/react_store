import { create } from "zustand";

interface UserState {
  name: string;
  age: number;
  changeName: (val: string) => void;
  changeAge: (val: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: "",
  age: 0,
  changeName: (value: string) => set(() => ({ name: value })),
  changeAge: (value: number) => set({ age: value }),
}));
