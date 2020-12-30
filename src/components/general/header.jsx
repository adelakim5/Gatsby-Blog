import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPortrait, faBell, faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <nav>
      <Link className={headerStyles.link} to="/">
        개츠비로 블로그 만들기
      </Link>
      <span>
        <span className={headerStyles.link}>
          <FontAwesomeIcon className={headerStyles.icon} icon={faSearch} />
        </span>
        <Link className={headerStyles.link} to="/about">
          <FontAwesomeIcon className={headerStyles.icon} icon={faPortrait} />
        </Link>
        <Link className={headerStyles.link} to="/">
          <FontAwesomeIcon className={headerStyles.icon} icon={faBell} />
        </Link>
      </span>
    </nav>
  )
}
