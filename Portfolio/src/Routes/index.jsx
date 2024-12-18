import {createBrowserRouter} from "react-router-dom"
import Home from "../Pages/Home"
import Services from "../Pages/Services"
import Projects from "../Pages/Projects"
import Contact from "../Pages/Contact"
import Layout from "../Layouts/Layout"

export const router = createBrowserRouter([
  {
    path:"/",
    element  : <Layout />,
    children : [
      {
        path:"",
        element:<Home />
      },
      {
        path: "/services",
        element : <Services />
      },
      {
        path : "/projects",
        element : <Projects />
      },
      {
        path:"/contact",
        element: < Contact />
      }
    ]
  }
])