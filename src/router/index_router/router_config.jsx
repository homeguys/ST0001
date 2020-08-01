/**
 * 头部路由跳转和渲染组件
 * 只需在导出里对应增加一个对象就能自动增加一个tabs页以及对应的组件
 */
import React, { lazy } from 'react'

const Login = lazy(() => import(/* webpackChunkName: '1_login' */ '../../pages/1_login'))
const Main = lazy(() => import(/* webpackChunkName: '2_main' */ '../../pages/2_main'))

export default [
  {
    name: '登录',
    path: '/login',
    component: <Login />
  },
  {
    name: '组件',
    path: '/main',
    component: <Main />
  }
]
