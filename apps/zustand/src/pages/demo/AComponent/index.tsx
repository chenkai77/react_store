import { useUserStore } from "@/store/user";
export default function AComponent() {
  const userName = useUserStore((state) => state.name);
  const userAge = useUserStore((state) => state.age);
  return (
    <div>
      <h3>A组件</h3>
      <div>用户姓名：{userName}</div>
      <div>用户年龄：{userAge}</div>
    </div>
  );
}
