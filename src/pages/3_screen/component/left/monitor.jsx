import React from 'react'

function Monitor() {
  return (
    <section className="block monitor">
      <section className="title">动态监测</section>
      <section className="content">
        <ul>
          <li>
            <span className="text">视频监控</span>
            <span className="num">
              <i>67</i>
              <span>个</span>
            </span>
          </li>
          <li>
            <span className="text">遥感监测</span>
            <span className="num">
              <i>35</i>
              <span>个</span>
            </span>
          </li>
          <li>
            <span className="text">无人机监测</span>
            <span className="num">
              <i>25</i>
              <span>处</span>
            </span>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Monitor
