/* eslint-disable */
/*
 * @Author: 郑杰
 * @Date: 2020-08-11 16:56:53
 * @LastEditors: 郑杰14
 * @LastEditTime: 2020-08-19 17:19:58
 * @Description: 饼状图option
 */
import React from 'react'
import recompact from 'recompact'
import LoadEcharts from '../../../../../../../component/hoc_component/load_charts2'

/* 地表变化饼状图 */
const param = {
  option: {
    title: {
      text: '按水域类型查看',
      left: 'center',
      top: '0%',
      textStyle: {
        fontSize: 17,
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
      show: true,
      orient: 'horizontal',
      bottom: 20,
      textStyle: {
        color: 'black'
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
        radius: '55%',
        center: ['50%', '43%'],
        data: [],
        itemStyle: {
          color: function (params) {
            var colorarrays = ['#6BDAEE', '#F69EFB', '#75AFFF', '#FFEC80', '#FFDCDC', '#7FCBC3', '#FFBB91']
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
            position: 'outside',
            formatter: '{b}：{c} km²',
            color: '#1D302E',
            fontSize: 16
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
