/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import echarts from 'echarts'

const options = {
  color: ['#0096ff', '#0041fb', '#04e0f9', '#1c7ef6'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
    textStyle: {
      fontSzie: 5
    }
  },
  legend: {
    orient: 'vertical',
    right: '20%',
    top: 'center',
    data: ['乱建', '乱堆', '乱占', '乱采'],
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['60%', '80%'],
      center: ['30%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      }
      // data: [
      //   { value: 1335, name: '乱建' },
      //   { value: 310, name: '乱堆' },
      //   { value: 610, name: '乱占' },
      //   { value: 310, name: '乱采' }
      // ]
    }
  ]
}

function Statistics(props) {
  const { statisticsManageInfo } = props
  const {
    OV_WaterDisorderly = '',
    OV_WaterBuilt = '',
    OV_WaterMisappropriation = '',
    OV_WaterDisorderlyMining = ''
  } = statisticsManageInfo

  let myChart
  /** echants响应屏幕改变 */
  function screenChange() {
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  }

  useEffect(() => {
    const data = [
      { value: OV_WaterBuilt, name: '乱建' },
      { value: OV_WaterDisorderly, name: '乱堆' },
      { value: OV_WaterMisappropriation, name: '乱占' },
      { value: OV_WaterDisorderlyMining, name: '乱采' }
    ]
    const content = document.querySelector('.statistics .content')
    myChart = echarts.init(content)
    options.series[0].data = data
    myChart.setOption(options)

    screenChange()
  }, [statisticsManageInfo])

  return (
    <section className="block statistics">
      <section className="title">清四乱统计</section>
      <section className="content" />
    </section>
  )
}

export default Statistics
