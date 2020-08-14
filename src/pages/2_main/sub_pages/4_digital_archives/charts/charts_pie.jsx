import React, { useState, useEffect } from 'react'
import echarts from 'echarts'
import { createHash } from '../../../../../utils/utils'

function ChartsPie() {
  const [hash] = useState(createHash(10))

  useEffect(() => {
    const chartDom = document.getElementsByClassName(`charts-pie-item-${hash}`)[0]
    const myChart = echarts.init(chartDom)
    const options = {
      color: ['#67a8e6', '#f7be6f'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        bottom: 10,
        right: 0,
        data: ['涉河涉堤项目', '水域调整项目']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '16',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 335, name: '涉河涉堤项目' },
            { value: 100, name: '水域调整项目' }
          ]
        }
      ]
    }

    myChart.setOption(options)
  }, [])

  return <section className={`charts-pie-item-${hash}`} style={{ width: '100%', height: '100%' }} />
}

export default ChartsPie
