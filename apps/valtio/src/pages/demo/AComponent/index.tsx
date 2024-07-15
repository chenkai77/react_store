import { useSnapshot } from "valtio";
import { user } from "@/store/user";

export default function AComponent() {
  const userSnap = useSnapshot(user);
  return (
    <div>
      <h3>A组件</h3>
      <div>用户姓名：{userSnap.name}</div>
      <div>用户年龄：{userSnap.age}</div>
    </div>
  );
}
