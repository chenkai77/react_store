import { useAtom, useAtomValue } from "jotai";
import { nameAtom, readWriteAgeAtom, introductionAtom } from "@/store/user";

export default function AComponent() {
  const [name] = useAtom(nameAtom);
  const [age] = useAtom(readWriteAgeAtom);
  const introduction = useAtomValue(introductionAtom);
  return (
    <div>
      <h3>A组件</h3>
      <div>用户姓名：{name}</div>
      <div>用户年龄：{age}</div>
      <div>{introduction}</div>
    </div>
  );
}
