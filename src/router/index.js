import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import Index from "./Index/Index"
import Comics from "./Comics/Comics"
import ComicDetails from "./ComicDetails/ComicDetails"


const indexRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
        {
          path: "/comics", 
          element: <Comics />,
        },
        {
          path: "/details/:id",
          element: <ComicDetails />,
        }
      ],
    },
  ],
)

export default indexRouter
