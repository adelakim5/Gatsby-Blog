import React from "react"
import { Link } from "gatsby"
import Header from "../components/general/header"
import Aside from "../components/general/aside"
import Styles from "../styles/global.module.css"

export default function Home() {
  return (
    <div>
      <Header />
      <div className={Styles.container}>
        <span className={Styles.aside}>
          <Aside />
        </span>
        <span className={Styles.article}>
          <Link to="/contact/">Contact</Link>
          <h1>Hello World!</h1>
          <p>This is a test one</p>
        </span>
      </div>
    </div>
  )
}
