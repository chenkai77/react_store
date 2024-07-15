import "./index.scss";
import AComponent from "./AComponent";
import BComponent from "./BComponent";

export default function Demo() {
  return (
    <div className="wrap">
      <div className="component-wrap">
        <AComponent></AComponent>
      </div>
      <div className="component-wrap">
        <BComponent></BComponent>
      </div>
    </div>
  );
}
