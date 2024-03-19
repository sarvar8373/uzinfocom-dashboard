import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../../pages/404/Errorpage";
import Area from "../../pages/area";
import Fields from "../../pages/fields";
import Suborganization from "../../pages/organization/suborganization";
import TopArea from "../../pages/organization/top-area";
import TopIssue from "../../pages/organization/top-issue";
import Expired from "../../pages/organization/expired";
import GenericLayout from "../../pages/layouts/GenericLayout";
import Home from "../../pages/home";

const routes = [
  {
    element: <GenericLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hududlar",
        element: <Area />,
      },
      {
        path: "/sohalar",
        element: <Fields />,
      },
      {
        path: "/tashkilot",
        element: <Suborganization />,
      },
      {
        path: "/top-tuman",
        element: <TopArea />,
      },
      {
        path: "/top-masala",
        element: <TopIssue />,
      },
      {
        path: "/muddati",
        element: <Expired />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
