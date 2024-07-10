import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route";
import { RecoilRoot } from "recoil";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
