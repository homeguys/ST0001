/**
 * 头部路由跳转和渲染组件
 * 只需在导出里对应增加一个对象就能自动增加一个tabs页以及对应的组件
 */
import React, { lazy } from 'react'

const Login = lazy(() => import(/* webpackChunkName: '1_login' */ '../../pages/1_login'))
const Main = lazy(() => import(/* webpackChunkName: '2_main' */ '../../pages/2_main'))
const Screen = lazy(() => import(/* webpackChunkName: '3_screen' */ '../../pages/3_screen'))
const ScreenHorizontal = lazy(() => import(/* webpackChunkName: '3_screen' */ '../../pages/4_screen_horizontal'))

export default [
  {
    name: '大屏',
    path: '/screen',
    component: <Screen />
  },
  {
    name: '大屏横屏',
    path: '/screenHorizontal',
    component: <ScreenHorizontal />
  },
  {
    name: '登录',
    path: '/login',
    component: <Login />
  },
  {
    name: '主页',
    path: '/main',
    component: <Main />
  }
]
