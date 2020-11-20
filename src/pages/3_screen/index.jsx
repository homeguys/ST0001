import React, { useEffect } from 'react'
import recompact from 'recompact'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './component/header'
import Monitor from './component/left/monitor'
import Status from './component/left/status'
import StatusModal from './component/left/status_modal'
import Video from './component/left/video'
import Standard from './component/right/standard'
import Ratio from './component/right/ratio'
import Analyse from './component/right/analyse'
import Statistics from './component/right/statistics'
import { getBaseInforStatistics } from '../../store/screen.redux'
import './style.scss'

const enhance = recompact.compose(withRouter)

function Screen(props) {
  const dispatch = useDispatch()
  const { history } = props
  const { push } = history

  // 初始化加载请求页面数据
  useEffect(() => {
    dispatch(getBaseInforStatistics())
  }, [])

  return (
    <section id="screen">
      <Header push={push} />
      <section className="content">
        <section className="left">
          <Monitor />
          <Status>
            <StatusModal />
          </Status>
          <Video />
        </section>
        <section className="map-box map-container block">地图容器</section>
        <section className="right">
          <Standard />
          <Ratio />
          <Analyse />
          <Statistics />
        </section>
      </section>
    </section>
  )
}

export default enhance(Screen)
