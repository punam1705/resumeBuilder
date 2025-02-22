import React from "react"
import "./layout.css"
import GlobalStyle from '../style/GlobalStyles'

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
