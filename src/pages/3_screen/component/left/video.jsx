import React from 'react'

function Video() {
  return (
    <section className="block video">
      <section className="title">视频监控点</section>
      <section className="content">
        <section className="top">
          <p>xx站偷排告警信息</p>
        </section>
        <section className="bottom">
          <p>
            <span>水质识别：</span>
            <span>污水</span>
          </p>
          <p>
            <span>置信度</span>
            <span>98.17%</span>
          </p>
        </section>
      </section>
    </section>
  )
}

export default Video
