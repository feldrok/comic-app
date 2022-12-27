import React from "react"
import { RouterProvider } from "react-router-dom"
import indexRouter from "./router/index"
import Layout from "./layouts/Layout"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={indexRouter} />
      </Layout>
    </div>
  )
}

export default App
