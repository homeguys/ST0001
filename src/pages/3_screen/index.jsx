import React from 'react'
import recompact from 'recompact'
import { withRouter } from 'react-router-dom'
import Header from './component/header'
import Monitor from './component/left/monitor'
import Status from './component/left/status'
import Video from './component/left/video'
import Standard from './component/right/standard'
import Ratio from './component/right/ratio'
import Analyse from './component/right/analyse'
import Statistics from './component/right/statistics'
import './style.scss'

const enhance = recompact.compose(withRouter)

function Screen(props) {
  const { history } = props
  const { push } = history

  return (
    <section id="screen">
      <Header push={push} />
      <section className="content">
        <section className="left">
          <Monitor />
          <Status />
          <Video />
        </section>
        <section className="map block">map</section>
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
