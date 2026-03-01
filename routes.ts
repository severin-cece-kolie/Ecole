import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import News from "./pages/News";
import Contact from "./pages/Contact";
import StudentDashboard from "./pages/dashboards/StudentDashboard";
import ParentDashboard from "./pages/dashboards/ParentDashboard";
import TeacherDashboard from "./pages/dashboards/TeacherDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "a-propos", Component: About },
      { path: "programmes", Component: Programs },
      { path: "admissions", Component: Admissions },
      { path: "actualites", Component: News },
      { path: "contact", Component: Contact },
      { path: "dashboard/eleve", Component: StudentDashboard },
      { path: "dashboard/parent", Component: ParentDashboard },
      { path: "dashboard/enseignant", Component: TeacherDashboard },
      { path: "dashboard/admin", Component: AdminDashboard },
      { path: "*", Component: NotFound },
    ],
  },
]);
