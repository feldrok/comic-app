import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Layout() {
  // Nav & Footer
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
