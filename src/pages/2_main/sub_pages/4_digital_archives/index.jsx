import React from 'react'
import Statistic from './statistic'
import ArchivalInfoShow from './archival_info'
import './style.scss'

function DigitalArchives() {
  return (
    <section id="digital-archives">
      <section className="left">aa</section>
      <section className="right">
        {/* <Statistic /> */}
        <ArchivalInfoShow />
      </section>
    </section>
  )
}

export default DigitalArchives
