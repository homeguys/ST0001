import React from 'react'
import { Link } from 'react-router-dom'
import routerConfig from './router_config'

export default function HeaderLink() {
  return (
    <ul>
      {routerConfig.map((item) => (
        <li key={item.path} className={`nav-item ${item.path}`}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}
