import { useAppDispatch } from "@/store/index";
import { changeAge, changeName } from "@/store/user";

export default function BComponent() {
  const dispatch = useAppDispatch();

  const changeUserName = (val: string) => {
    dispatch(changeName(val));
  };
  const changeUserAge = (val: string) => {
    dispatch(changeAge(Number(val)));
  };

  return (
    <div>
      <h3>B组件</h3>
      <div>
        <span>修改用户姓名：</span>
        <input
          type="text"
          onChange={(e) => changeUserName(e.currentTarget.value)}
        />
      </div>
      <div>
        <span>修改用户年龄：</span>
        <input
          type="number"
          onChange={(e) => changeUserAge(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
