import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Redux from "../pages/redux/index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "redux",
        element: <Redux />,
      },
    ],
  },
]);

export default routes;
