import React from "react"
import asideStyles from "./aside.module.css"

export default function Aside() {
  return (
    <div className={asideStyles.card}>
      <div className={asideStyles.card_body}>
        <h5 className={asideStyles.title}>adelakim5</h5>
        <ul>
          <li>
            현재까지 기록한 문제수
            <span className={asideStyles.value}>0</span>
          </li>
          <li>
            다시 푼 문제수
            <span className={asideStyles.value}>0</span>
          </li>
        </ul>
      </div>
      <div className={asideStyles.card_body}>
        <h5 className={asideStyles.title}>Algorithm Sites</h5>
        <ul>
          <li className={asideStyles.checkBox}>
            <input type="checkbox" />
            <label htmlFor="boj">
              <span>백준</span>
            </label>
          </li>
          <li className={asideStyles.checkBox}>
            <input type="checkbox" />
            <label htmlFor="programmers">
              <span>프로그래머스</span>
            </label>
          </li>
        </ul>
      </div>
      <div className={asideStyles.card_body}>
        <h5 className={asideStyles.title}>Categories</h5>
        <ul>
          <li className={asideStyles.list}>그 외 목록들을 채울 예정</li>
        </ul>
      </div>
    </div>
  )
}
