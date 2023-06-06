import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// --------------------------------------------------------------------
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const WorksPage = lazy(() => import("../pages/WorksPage/WorksPage"));
const ProjectPage = lazy(() => import("../pages/ProjectPage/ProjectPage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const InformationPage = lazy(() =>
  import("../pages/InformationPage/InformationPage")
);

// --------------------------------------------------------------------

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/works",
    element: <WorksPage />,
  },
  {
    path: "/works/:id",
    element: <ProjectPage />,
  },
  {
    path: "/contact-me",
    element: <ContactPage />,
  },
  {
    path: "/information",
    element: <InformationPage />,
  },
]);
