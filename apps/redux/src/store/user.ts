import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", // 字符串名称标识
  initialState: {
    age: 0,
    name: "",
  },
  reducers: {
    changeAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.name = action.payload;
    },
  },
});

export const { changeAge, changeName } = userSlice.actions;

export default userSlice.reducer;
