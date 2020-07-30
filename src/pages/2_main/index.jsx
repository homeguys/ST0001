/* eslint-disable no-shadow */
import React from 'react'
import { connect } from 'react-redux'
import recompact from 'recompact'
import { withRouter } from 'react-router-dom'
import Header from '../../component/header'
import SliderBar from '../../component/sliderbar'
import MapContainer from '../../component/map_container'
import loginCheck from '../../component/hoc_component/login_check'
import { loginOut } from '../../store/login.redux'
import { initSearch } from '../../store/search.redux'
import './style.scss'

const enhance = recompact.compose(
  connect((state) => state.logining, { loginOut, initSearch }),
  withRouter
  // loginCheck('main')
)

@enhance
class Main extends React.Component {
  componentWillUnmount() {
    const { initSearch } = this.props
    initSearch()
  }

  render() {
    const { loginOut } = this.props
    return (
      <section id="main" className="wrapper">
        aa
      </section>
    )
  }
}

export default Main
