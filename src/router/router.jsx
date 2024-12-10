import Home from "../components/Home";
import Q1 from "../components/Q1";
import Q2 from "../components/Q2";
import Q3 from "../components/Q3";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/q1",
    element: <Q1 />,
  },
  {
    path: "/q2",
    element: <Q2 />,
  },
  {
    path: "/q3",
    element: <Q3 />,
  },
];

export default routes;
