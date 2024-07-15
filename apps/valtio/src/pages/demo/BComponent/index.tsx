import { user } from "@/store/user";

export default function BComponent() {
  return (
    <div>
      <h3>B组件</h3>
      <div>
        <span>修改用户姓名：</span>
        <input
          type="text"
          onChange={(e) => (user.name = e.currentTarget.value)}
        />
      </div>
      <div>
        <span>修改用户年龄：</span>
        <input
          type="number"
          onChange={(e) => (user.age = Number(e.currentTarget.value))}
        />
      </div>
    </div>
  );
}
