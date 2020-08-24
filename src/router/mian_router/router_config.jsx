/**
 * 头部路由跳转和渲染组件
 * 只需在导出里对应增加一个对象就能自动增加一个tabs页以及对应的组件
 */

import React, { lazy } from 'react'

const RiverPicture = lazy(() => import(/* webpackChunkName: 'RiverPicture' */ '../../pages/2_main/sub_pages/1_river_picture'))
const DynamicMonitore = lazy(() => import(/* webpackChunkName: 'DynamicMonitore' */ '../../pages/2_main/sub_pages/2_dynamic_monitore'))
const Supervision = lazy(() => import(/* webpackChunkName: 'Supervision' */ '../../pages/2_main/sub_pages/3_supervision'))
const DigitalArchives = lazy(() => import(/* webpackChunkName: 'DigitalArchives' */ '../../pages/2_main/sub_pages/4_digital_archives'))
const AccountManage = lazy(() => import(/* webpackChunkName: 'AccountManage' */ '../../pages/2_main/sub_pages/5_account_manage'))
const WarnInfo = lazy(() => import(/* webpackChunkName: 'WarnInfo' */ '../../pages/2_main/sub_pages/6_warn_info'))
const WaterInfo = lazy(() => import(/* webpackChunkName: 'WaterInfo' */ '../../pages/2_main/sub_pages/7_water_info'))

export default [
  {
    name: '河湖一张图',
    path: 'riverPic',
    icon: 'icon_nav1.png',
    component: <RiverPicture />
  },
  {
    name: '动态监测',
    path: 'dynamicMonitore',
    icon: 'icon_nav2.png',
    component: <DynamicMonitore />
  },
  {
    name: '批后监管',
    path: 'supervision',
    icon: 'icon_nav3.png',
    component: <Supervision />
  },
  {
    name: '数字档案',
    path: 'digitalArchives',
    icon: 'icon_nav4.png',
    component: <DigitalArchives />
  },
  {
    name: '台账管理',
    path: 'accountManage',
    icon: 'icon_nav5.png',
    component: <AccountManage />
  },
  // {
  //   name: '预警信息',
  //   path: 'warnInfo',
  //   icon: 'icon_nav6.png',
  //   component: <WarnInfo />
  // },
  {
    name: '水域信息',
    path: 'waterInfo',
    icon: 'icon_nav6.png',
    component: <WaterInfo />
  }
]
