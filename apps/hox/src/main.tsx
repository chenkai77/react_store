import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route";
import { HoxRoot } from "hox";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <HoxRoot>
    <RouterProvider router={router} />
  </HoxRoot>
);
