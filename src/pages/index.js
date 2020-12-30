import React from "react"
import { Link } from "gatsby"
import Header from "../components/general/header"
import Aside from "../components/general/aside"
import Article from "../components/main/article"
import Styles from "../styles/global.module.css"

export default function Home() {
  return (
    <div>
      <Header className={Styles.header} />
      <div className={Styles.container}>
        <span className={Styles.aside}>
          <Aside />
        </span>
        <span className={Styles.article}>
          <Article />
        </span>
      </div>
    </div>
  )
}
