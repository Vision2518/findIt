import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound.jsx";
// import { PublicRoutes } from "./PublicRoutes";
// import { PublicLayout } from "../layout/PublicLayout";


export const indexRouter = createBrowserRouter([
  
//   {
//     path: "/",
//     element: <PublicLayout />,
//     children: PublicRoutes,
//   },
  {
   path: "*",
    element: <NotFound />,
  },
]);