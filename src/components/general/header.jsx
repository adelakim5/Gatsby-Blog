import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPortrait, faBell } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <nav>
      <Link className={headerStyles.link} to="/">
        title
      </Link>
      <span>
        <Link className={headerStyles.link} to="/">
          <FontAwesomeIcon className={headerStyles.icon} icon={faPortrait} />
        </Link>
        <Link className={headerStyles.link} to="/">
          <FontAwesomeIcon className={headerStyles.icon} icon={faBell} />
        </Link>
      </span>
    </nav>
  )
}
