import { useAtom, useSetAtom } from "jotai";
import { nameAtom, changeNameAtom } from "@/store/user";

export default function Redux() {
  const [, setName] = useAtom(nameAtom);
  // const setName = useSetAtom(changeNameAtom);

  console.log("B组件渲染了");

  return (
    <div>
      <h3>B组件</h3>
      <div>
        <span>修改用户姓名：</span>
        <input type="text" onChange={(e) => setName(e.currentTarget.value)} />
      </div>
    </div>
  );
}
