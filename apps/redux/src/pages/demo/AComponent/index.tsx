import { useAppSelector } from "@/store/index";
export default function AComponent() {
  const userName = useAppSelector((state) => state.user.name);
  const userAge = useAppSelector((state) => state.user.age);

  return (
    <div>
      <h3>A组件</h3>
      <div>用户姓名：{userName}</div>
      <div>用户年龄：{userAge}</div>
    </div>
  );
}
