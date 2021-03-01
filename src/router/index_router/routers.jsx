import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import routerConfig from './router_config'

export default function Routers() {
  return (
    <div className="index-wrapper">
      <Switch>
        {routerConfig.map((item) => (
          <Route path={item.path} key={item.path}>
            <Suspense fallback={<Spin size="large" />}>{item.component}</Suspense>
          </Route>
        ))}
        <Redirect to="/screen" />
        {/* <Redirect to="/screenHorizontal" /> */}
      </Switch>
    </div>
  )
}
