import React from "react"
import Header from "../components/general/header"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      {/* <Header headerText="Contact"></Header> */}
      <p>contact page</p>
    </div>
  )
}
