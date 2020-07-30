import React from 'react'
import BaseMap from '../basemap'
import Toolbars from '../toolbar'
import Legend from '../legend'
import AutoPlaybar from '../playbar'
import Infobar from '../infobar'
import TifTips from '../tifTips'
import './style.scss'

class MapContainer extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section id="map-container">
        <BaseMap />
        <Toolbars />
        <Infobar />
        <AutoPlaybar />
        <Legend />
        <TifTips />
      </section>
    )
  }
}

export default MapContainer
