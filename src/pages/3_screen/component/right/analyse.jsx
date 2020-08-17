import React, { useEffect } from 'react'
import echarts from 'echarts'

function Analyse() {
  let myChart
  /** echants响应屏幕改变 */
  function screenChange() {
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  }

  useEffect(() => {
    const content = document.querySelector('.analyse .content')
    myChart = echarts.init(content)
    const options = {
      color: ['#66c3ff', '#0b9fff'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        textStyle: {
          fontSzie: 5
        }
      },
      legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        data: ['占用水域', '补偿水域'],
        textStyle: {
          color: '#fff',
          fontWeight: 'normal'
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
          },
          data: [
            { value: 335, name: '占用水域' },
            { value: 310, name: '补偿水域' }
          ]
        }
      ]
    }
    myChart.setOption(options)

    screenChange()
  }, [])

  return (
    <section className="block analyse">
      <section className="title">2020年水域占补分析</section>
      <section className="content" />
    </section>
  )
}

export default Analyse
