import { useAtom, useSetAtom } from "jotai";
import {
  nameAtom,
  ageAtom,
  readWriteAgeAtom,
  changeNameAtom,
} from "@/store/user";

export default function Redux() {
  const [, setName] = useAtom(nameAtom);
  const [, setAge] = useAtom(ageAtom);
  const setUserName = useSetAtom(changeNameAtom);
  const setUserAge = useSetAtom(readWriteAgeAtom);

  return (
    <div>
      <h3>B组件</h3>
      <div>
        <span>修改用户姓名：</span>
        <input type="text" onChange={(e) => setName(e.currentTarget.value)} />
      </div>
      <div>
        <span>修改用户姓名2：</span>
        <input
          type="text"
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
      </div>
      <div>
        <span>修改用户年龄：</span>
        <input
          type="number"
          onChange={(e) => setAge(Number(e.currentTarget.value))}
        />
      </div>
      <div>
        <span>修改用户年龄2：</span>
        <input
          type="number"
          onChange={(e) => setUserAge(Number(e.currentTarget.value))}
        />
      </div>
    </div>
  );
}
