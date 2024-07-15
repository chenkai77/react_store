import "./index.scss";
import AComponent from "./AComponent";
import BComponent from "./BComponent";
import CComponent from "./CComponent";

export default function Demo() {
  return (
    <div className="wrap">
      <CComponent></CComponent>

      {/* <div className="component-wrap">
        <AComponent></AComponent>
      </div>
      <div className="component-wrap">
        <BComponent></BComponent>
      </div> */}
    </div>
  );
}
