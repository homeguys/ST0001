/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Slider, message, Icon } from 'antd'
import { toast } from '../../../utils/utils'
import './style'

class Playbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlay: false,
      value: 0,
      marks: props.marks,
      issue: '',
      autoplaySpeed: props.autoplaySpeed
    }
    this.timer = null
    this.onChange = props.onChange
    this.sliderbar = document.getElementById('sliderbar')
    this.infobar = document.getElementById('infobar')
    this.header = document.getElementById('header')
  }

  static getDerivedStateFromProps(props, state) {
    const { marks, autoplaySpeed = 3000, issue } = props
    if (marks !== state.marks || issue !== state.issue || autoplaySpeed !== state.autoplaySpeed) {
      return {
        marks,
        autoplaySpeed,
        issue
      }
    }
    return null
  }

  componentDidMount() {
    const { onRef } = this.props
    onRef(this)
  }

  componentWillUnmount() {
    this.resetAutoPlay()
  }

  autoPlay = () => {
    this.setState(
      (previous) => ({
        isPlay: !previous.isPlay
      }),
      () => {
        const { isPlay, value } = this.state
        if (isPlay) {
          this.setAutoPlayInterval()
        } else {
          this.resetAutoPlay(value)
        }
      }
    )
  }

  // 设置播放定时器
  setAutoPlayInterval = () => {
    sliderbar.style.pointerEvents = 'none'
    infobar.style.pointerEvents = 'none'
    header.style.pointerEvents = 'none'

    clearInterval(this.timer)
    let { value } = this.state
    const { marks, autoplaySpeed } = this.state
    const max = Object.keys(marks).length - 1

    this.timer = setInterval(() => {
      if (value >= max) {
        value = 0
        this.onChange(value)
        this.resetAutoPlay(value)
      } else {
        /**
         * 相对应的操作
         */
        value += 1
        this.setState({
          value
        })
        this.onChange(value)
      }
    }, autoplaySpeed)
  }

  // 重置播放定时器
  resetAutoPlay = (value) => {
    sliderbar.style.pointerEvents = 'auto'
    infobar.style.pointerEvents = 'auto'
    header.style.pointerEvents = 'auto'

    clearInterval(this.timer)
    this.setState({
      isPlay: false,
      value
    })
  }

  // 上一个
  previousPlay = () => {
    let { value } = this.state
    if (value > 0) {
      value -= 1
      this.setState({
        value
      })
      this.onChange(value)
    } else {
      toast(message, '已经是第一个', 'info')
    }
  }

  // 下一个
  nextPlay = () => {
    let { value } = this.state
    const { marks } = this.state
    const max = Object.keys(marks).length - 1

    if (value < max) {
      value += 1
      this.setState({
        value
      })
      this.onChange(value)
    } else {
      toast(message, '已经是最后一个', 'info')
    }
  }

  // 第一个
  firstPlay = () => {
    const { value } = this.state
    if (value !== 0) {
      this.onChange(0)
      this.setState({
        value: 0
      })
    }
  }

  // 拖动slider
  dragSlider = (value) => {
    this.setState({
      value
    })
  }

  dragSlider1 = (value) => {
    this.onChange(value)
  }

  render() {
    const { isPlay, value, marks, issue } = this.state
    const max = Object.keys(marks).length > 0 ? Object.keys(marks).length - 1 : 0

    return (
      <div className="htht-playbar">
        <div className={`play-btn ${max ? '' : 'disabled'}`} onClick={this.autoPlay}>
          {isPlay ? <Icon type="pause" /> : <Icon type="caret-right" />}
        </div>
        <div className="slider-contanier">
          <Slider
            tipFormatter={() => issue}
            tooltipVisible
            min={0}
            max={max}
            // marks={marks}
            disabled={!(max > 0)}
            value={value}
            onChange={this.dragSlider}
            onAfterChange={this.dragSlider1}
          />
        </div>
      </div>
    )
  }
}

export default Playbar
