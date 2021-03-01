import React, { useEffect } from 'react'
import echarts from 'echarts'

const options = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    top: '15%',
    right: '10%',
    left: '10%',
    bottom: '20%' // 图表尺寸大小
  },
  xAxis: [
    {
      type: 'category',
      color: '#59588D',
      // data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
      axisLabel: {
        margin: 10,
        color: '#fff',
        textStyle: {
          fontSize: 12
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(107,107,107,0.37)'
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      axisLabel: {
        formatter: '{value}%',
        color: '#fff',
        textStyle: {
          fontSize: 12
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(107,107,107,0.37)'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(131,101,101,0.2)',
          type: 'dashed'
        }
      }
    }
  ],
  series: [
    {
      type: 'bar',
      data: [100, 80, 50, 36, 30, 35, 40, 60],
      barWidth: '16px',
      itemStyle: {
        normal: {
          color: (params) => {
            // 展示正值的柱子，负数设为透明
            const colorArr =
              params.value > 0 ? ['#55d1ff', '#2d82ff'] : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
            return new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: colorArr[0] // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: colorArr[1] // 100% 处的颜色
                }
              ],
              false
            )
          },
          barBorderRadius: [30, 30, 0, 0] // 圆角大小
        }
      }
    },
    {
      data: [100, 80, 50, 36, 30, 35, 40, 60],
      type: 'line',
      smooth: true,
      name: '折线图',
      symbol: 'none',
      lineStyle: {
        color: '#3275FB',
        width: 3,
        shadowColor: 'rgba(0, 0, 0, 0.3)', // 设置折线阴影
        shadowBlur: 10,
        shadowOffsetY: 10
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(73, 86, 255, 0.5)'
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, 0.1)'
              }
            ],
            false
          )
        }
      }
    }
  ]
}

function Ratio(props) {
  const { statisticsDynamicWaterRate } = props

  let myChart
  /** echants响应屏幕改变 */
  function screenChange() {
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  }

  useEffect(() => {
    const date = statisticsDynamicWaterRate.map((item) => new Date(item.OV_Date).getDate())
    const value = statisticsDynamicWaterRate.map((item) => item.OV_WaterRegionPlanRatio)
    const content = document.querySelector('.ratio .content')
    myChart = echarts.init(content)
    options.xAxis[0].data = date
    options.series[0].data = value
    options.series[1].data = value

    myChart.setOption(options)

    screenChange()
  }, [statisticsDynamicWaterRate])

  return (
    <section className="block ratio">
      <section className="title">即时动态水面率</section>
      <section className="content" />
    </section>
  )
}

export default Ratio
