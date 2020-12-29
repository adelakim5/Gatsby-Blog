import React from "react"
import { Link } from "gatsby"
import asideStyles from "./aside.module.css"

export default function Aside() {
  return (
    <div>
      <div className={asideStyles.card}>
        <div className={asideStyles.card_body}>
          <h5 className={asideStyles.title}>adelakim5</h5>
          <ul className={asideStyles.list}>
            <li>
              기록한 문제수
              <span className={asideStyles.value}>0</span>
            </li>
            <li>
              다시 푼 문제수
              <span className={asideStyles.value}>0</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={asideStyles.card}></div>
      <div className={asideStyles.card}></div>
    </div>
  )
}
