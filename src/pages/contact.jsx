import React from "react"
import Header from "../components/general/header"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <div>
      <Header />
      <div style={{ color: `teal` }}>
        <Link to="/">Home</Link>
        <p>contact page</p>
      </div>
    </div>
  )
}
