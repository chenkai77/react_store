import { useState } from "react";
import { createStore } from "hox";

const [useCountStore, CountStoreProvider] = createStore(() => {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((v) => v + 1);
  }
  return {
    count,
    addCount,
  };
});

function AComponent() {
  const { count } = useCountStore();
  return (
    <div className="component-wrap">
      <h3>A组件</h3>
      <div>
        <span>数值：</span>
        <div>{count}</div>
      </div>
    </div>
  );
}

function BComponent() {
  const { addCount } = useCountStore();
  return (
    <div className="component-wrap">
      <h3>B组件</h3>
      <div>
        <button onClick={addCount}>增加</button>
      </div>
    </div>
  );
}

export default function CComponent() {
  return (
    <div>
      <CountStoreProvider>
        <AComponent></AComponent>
        <BComponent></BComponent>
      </CountStoreProvider>
    </div>
  );
}
