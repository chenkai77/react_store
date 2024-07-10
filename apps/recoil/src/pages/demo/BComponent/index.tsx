import { useRecoilState, useRecoilValue } from "recoil";
import { nameState, ageState, introductionState } from "@/store/user";

export default function Redux() {
  const [name, setName] = useRecoilState(nameState);
  const [age, setAge] = useRecoilState(ageState);

  const changeUserName = (val: string) => {
    setName(val);
  };
  const changeUserAge = (val: string) => {
    setAge(Number(val));
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
