import React, { useEffect } from 'react'
import recompact from 'recompact'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from './component/header'
import Monitor from './component/left/monitor'
import Status from './component/left/status'
import StatusModal from './component/left/status_modal'
import Video from './component/left/video'
import Standard from './component/right/standard'
import Ratio from './component/right/ratio'
import Analyse from './component/right/analyse'
import Statistics from './component/right/statistics'
import {
  getBaseInforStatistics,
  GetStatisticsDynamicWaterRate,
  GetStatisticsManageInfo
} from '../../store/screen.redux'
import './style.scss'

const enhance = recompact.compose(withRouter)

function Screen(props) {
  const dispatch = useDispatch()
  const store = useSelector((state) => ({ screen: state.screen }))
  const { screen } = store
  const { basicData, statisticsDynamicWaterRate, statisticsManageInfo } = screen
  const { history } = props
  const { push } = history

  // 初始化加载请求页面数据
  useEffect(() => {
    // 请求基本统计信息 动态监测 + 水域现状 + 水利工程
    dispatch(getBaseInforStatistics())

    // 请求动态水面率面板的数据内容
    dispatch(GetStatisticsDynamicWaterRate())

    // 请求水面率，四乱和水域补偿等面板的数据内容
    dispatch(GetStatisticsManageInfo())
  }, [])

  return (
    <section id="screen">
      <Header push={push} />
      <section className="content">
        <section className="left">
          <Monitor basicData={basicData} />
          <Status basicData={basicData}>
            <StatusModal />
          </Status>
          <Video />
        </section>
        <section className="map-box map-container block">地图容器</section>
        <section className="right">
          <Standard statisticsManageInfo={statisticsManageInfo} />
          <Ratio statisticsDynamicWaterRate={statisticsDynamicWaterRate} />
          <Analyse statisticsManageInfo={statisticsManageInfo} />
          <Statistics statisticsManageInfo={statisticsManageInfo} />
        </section>
      </section>
    </section>
  )
}

export default enhance(Screen)
