import React from 'react'
import recompact from 'recompact'
import { withRouter } from 'react-router-dom'
import Header from '../3_screen/component/header'
import Monitor from '../3_screen/component/left/monitor'
import Status from '../3_screen/component/left/status'
import StatusModal from '../3_screen/component/left/status_modal'
import Video from '../3_screen/component/left/video'
import Standard from '../3_screen/component/right/standard'
import Ratio from '../3_screen/component/right/ratio'
import Analyse from '../3_screen/component/right/analyse'
import Statistics from '../3_screen/component/right/statistics'
import './style.scss'

const enhance = recompact.compose(withRouter)

function Screen(props) {
  const { history } = props
  const { push } = history

  return (
    <section id="screen" className="screen-horizontal">
      <Header push={push} />
      <section className="content">
        <section className="left">
          <Monitor />
          <Status type="horizon" />
          <Video />
        </section>
        <section className="map block">
          <section className="map-contain">aa</section>
          <StatusModal />
        </section>
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
