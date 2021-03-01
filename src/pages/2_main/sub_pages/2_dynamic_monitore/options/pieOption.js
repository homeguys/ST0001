/* eslint-disable */
/*
 * @Author: 郑杰
 * @Date: 2020-08-11 16:56:53
 * @LastEditors: 郑杰14
 * @LastEditTime: 2020-08-12 15:15:16
 * @Description: 饼状图option
 */
import React from 'react'
import recompact from 'recompact'
import LoadEcharts from '../../../../../component/hoc_component/load_charts2'

/* 地表变化饼状图 */
const param = {
  option: {
    title: {
      text: '',
      x: 'center',
      top: '2%',
      textStyle: {
        fontSize: 14,
        color: 'black',
        fontWight: 'bold'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)',
      position: [10, 10]
    },
    legend: {
      show: false,
      orient: 'vertical',
      right: 40,
      top: 20,
      width: 60,
      itemWidth: 18,
      itemHeight: 13,
      textStyle: {
        color: 'white'
      },
      formatter: (text) => {
        text = text.replace(/\S{8}/g, function (match) {
          return match + '\n'
        })
        return text
      },
      data: []
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        data: [],
        itemStyle: {
          color: function (params) {
            var colorarrays = ['#FFDCDC', '#80B1FF', '#7FCBC3', '#FFBB91']
            return colorarrays[params.dataIndex]
          },
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            position: 'inner',
            formatter: '{b}{d}%',
            color: '#1D302E'
          }
        }
      }
    ]
  }
}
const enhance = recompact.compose(LoadEcharts(param))
@enhance
class PieOption extends React.Component {
  render () {
    const { params } = this.props
    return (
      <div
        className={params.className}
        id={params.id}
      />
    )
  }
}
export default PieOption
