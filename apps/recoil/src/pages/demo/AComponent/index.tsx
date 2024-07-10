import { useRecoilState, useRecoilValue } from "recoil";
import { nameState, ageState, introductionState } from "@/store/user";

export default function AComponent() {
  const [name] = useRecoilState(nameState);
  const [age] = useRecoilState(ageState);
  const introduction = useRecoilValue(introductionState);
  return (
    <div>
      <h3>A组件</h3>
      <div>用户姓名：{name}</div>
      <div>用户年龄：{age}</div>
      <div>{introduction}</div>
    </div>
  );
}
