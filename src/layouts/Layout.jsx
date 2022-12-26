import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

function Layout({ children }) {
  // Nav & Footer
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
