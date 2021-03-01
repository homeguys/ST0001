import React from 'react'
import ChartsBar from './charts/charts_bar'
import ChartsPie from './charts/charts_pie'
import ChartsPieTwo from './charts/charts_two_bar'

function Statistic() {
  return (
    <>
      <section className="charts-item">
        <section className="title">统计分析</section>
        <ChartsBar />
      </section>
      <section className="charts-item pies">
        <section className="title">统计分析</section>
        <section>
          <ChartsPie />
        </section>
        <section>
          <ChartsPie />
        </section>
        <section>
          <ChartsPie />
        </section>
      </section>
      <section className="charts-item">
        <section className="title">统计分析</section>
        <ChartsPieTwo />
      </section>
    </>
  )
}

export default Statistic
