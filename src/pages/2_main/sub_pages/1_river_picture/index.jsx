import React from 'react'
import SliderBar from './component/slider-bar'
import './style.scss'

class RiverPicture extends React.Component {
  constructor(props) {
    super(props)
    this.name = 'wanglei'
  }

  render() {
    return (
      <div id="riverPicture">
        <SliderBar />
        <div className="map-container">map-container</div>
        <div className="info-box">info-box</div>
      </div>
    )
  }
}

export default RiverPicture
