import { useUserStore } from "@/store/user";

export default function BComponent() {
  const changeUserName = useUserStore((state) => state.changeName);
  const changeUserAge = useUserStore((state) => state.changeAge);
  const ageInputChange = (val: string) => {
    changeUserAge(Number(val));
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
          onChange={(e) => ageInputChange(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
