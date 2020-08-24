import React from 'react'
import './style.scss'

function WarnInfo() {
  return (
    <section className="warnInfo">
      <h5>
        预警信息
        <span>x</span>
      </h5>
      <ul>
        <li>
          <span className="iconfont">&#xe8c0;</span>
          <p className="content">
            <span className="top">预警信息</span>
            <span className="bottom">1分钟前</span>
          </p>
          <span className="time-stamp">昨天</span>
        </li>
        <li>
          <span className="iconfont">&#xe8c0;</span>
          <p className="content">
            <span className="top">预警信息</span>
            <span className="bottom">1分钟前</span>
          </p>
          <span className="time-stamp">昨天</span>
        </li>
        <li>
          <span className="iconfont">&#xe8c0;</span>
          <p className="content">
            <span className="top">预警信息</span>
            <span className="bottom">1分钟前</span>
          </p>
          <span className="time-stamp">昨天</span>
        </li>
        <li>
          <span className="iconfont">&#xe8c0;</span>
          <p className="content">
            <span className="top">预警信息</span>
            <span className="bottom">1分钟前</span>
          </p>
          <span className="time-stamp">昨天</span>
        </li>
      </ul>
      <button type="button" className="view-all">
        查看全部
      </button>
    </section>
  )
}

export default WarnInfo
