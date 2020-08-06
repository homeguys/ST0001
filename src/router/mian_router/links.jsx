/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import routerConfig from './router_config'

@withRouter
class HeaderLink extends React.Component {
  render() {
    const { match } = this.props
    const { url } = match
    return (
      <ul className="header-link">
        {routerConfig.map((item) => (
          <li key={item.path} className={`nav-item ${item.path}`}>
            <Link to={`${url}/${item.path}`}>
              <span className="nav-icon">
                <img src={require(`../../static/images/${item.icon}`)} alt="" />
              </span>
              <span className="nav-name">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default HeaderLink
