import { useUseStore, getUserStore } from "@/store/user";

export default function AComponent() {
  const { name, age } = useUseStore();

  function getStore() {
    const store = getUserStore();
    console.log(store);
  }

  return (
    <div>
      <h3>A组件</h3>
      <div>用户姓名：{name}</div>
      <div>用户年龄：{age}</div>
      <button onClick={getStore}>获取store数据</button>
    </div>
  );
}
