import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage, { coursesLoader } from "./pages/Courses";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/help/ContactPage";
import FaqPage from "./pages/help/FaqPage";
import HelpLayout from "./layouts/HelpLayout";
import CourseDetailsPage, { courseDetailsLoader } from "./pages/help/CourseDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "courses", element: <CoursesPage />, loader: coursesLoader },
      {path: "courses/:courseid", element: <CourseDetailsPage/>, loader: courseDetailsLoader},
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { index: true, element: <ContactPage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <FaqPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
