import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Demo from "../pages/demo/index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "redux",
        element: <Demo />,
      },
    ],
  },
]);

export default routes;
