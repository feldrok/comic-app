import React from "react"
import { RouterProvider } from "react-router-dom"
import indexRouter from "./router/index"
import "./App.css"

function App() {
  return (
      <div className="App">
        <RouterProvider router={indexRouter} />
      </div>
  )
}

export default App
