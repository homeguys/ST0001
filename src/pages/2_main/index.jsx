/* eslint-disable no-shadow */
//
import React from 'react'
import { connect } from 'react-redux'
import recompact from 'recompact'
import { withRouter } from 'react-router-dom'
import Header from '../../component/header/header'
// import SliderBar from '../../component/sliderbar'
// import MapContainer from '../../component/map_container'
import { Routers } from '../../router/mian_router'
import loginCheck from '../../component/hoc_component/login_check'
import { loginOut } from '../../store/login.redux'
import './style.scss'

const enhance = recompact.compose(
  connect((state) => state.logining, { loginOut }),
  withRouter
  // loginCheck('main')
)

@enhance
class Main extends React.Component {
  render() {
    const { loginOut } = this.props
    return (
      <section id="main" className="wrapper">
        <Header />
        <Routers />
      </section>
    )
  }
}

export default Main
