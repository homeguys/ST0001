import React, { Suspense } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { Spin } from 'antd'
import routerConfig from './router_config'

@withRouter
class Routers extends React.Component {
  render() {
    const { match } = this.props
    const { url } = match

    return (
      <div className="main-wrapper">
        <Switch>
          {routerConfig.map((item) => (
            <Route path={`${url}/${item.path}`} key={item.path}>
              <Suspense fallback={<Spin size="large" />}>{item.component}</Suspense>
            </Route>
          ))}
          <Redirect to={`${url}/${routerConfig[0].path}`} />
        </Switch>
      </div>
    )
  }
}

export default Routers
