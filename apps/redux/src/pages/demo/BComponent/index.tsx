import { useAppDispatch } from "@/store/index";
import { changeAge, changeName } from "@/store/user";
import { useRef } from "react";

export default function Redux() {
  const dispatch = useAppDispatch();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const changeUserName = () => {
    if (nameInputRef.current) {
      dispatch(changeName(nameInputRef.current.value));
    }
  };
  const changeUserAge = () => {
    if (ageInputRef.current) {
      dispatch(changeAge(Number(ageInputRef.current.value)));
    }
  };

  return (
    <div>
      <h3>B组件</h3>
      <div>
        <input type="text" ref={nameInputRef} />
        <button onClick={changeUserName}>修改用户姓名</button>
      </div>
      <div>
        <input type="text" ref={ageInputRef} />
        <button onClick={changeUserAge}>修改用户年龄</button>
      </div>
    </div>
  );
}
