import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello World!</h1>
      <p>This is a test one</p>
      <img src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" />
    </div>
  )
}
