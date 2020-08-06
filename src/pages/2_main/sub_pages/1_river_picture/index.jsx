import React from 'react'
import Sliderbar from '../../../../component/sliderbar'
import './style.scss'

class RiverPicture extends React.Component {
  constructor(props) {
    super(props)
    this.name = 'wanglei'
  }

  render() {
    return (
      <div id="riverPicture">
        <Sliderbar />
      </div>
    )
  }
}

export default RiverPicture
