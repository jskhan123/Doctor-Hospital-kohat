import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { OurTeam } from "./pages/OurTeam";
import { Services } from "./pages/Services";
import { Facilities } from "./pages/Facilities";
import { Appointment } from "./pages/Appointment";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "team", Component: OurTeam },
      { path: "services", Component: Services },
      { path: "facilities", Component: Facilities },
      { path: "appointment", Component: Appointment },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);