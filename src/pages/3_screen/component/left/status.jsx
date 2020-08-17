import React from 'react'
import { Progress } from 'antd'

function Status() {
  return (
    <section className="block status">
      <section className="content">
        <section className="top">
          <section className="title">水域现状</section>
          <ul>
            <li>
              <span className="text">省级河道</span>
              <Progress percent={30} size="small" showInfo={false} />
              <span className="num">
                <span>67</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">省级河道</span>
              <Progress percent={30} size="small" showInfo={false} />
              <span className="num">
                <span>67</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">省级河道</span>
              <Progress percent={30} size="small" showInfo={false} />
              <span className="num">
                <span>67</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">省级河道</span>
              <Progress percent={30} size="small" showInfo={false} />
              <span className="num">
                <span>67</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">省级河道</span>
              <Progress percent={30} size="small" showInfo={false} />
              <span className="num">
                <span>67</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">省级河道</span>
              <Progress percent={30} size="small" showInfo={false} />
              <span className="num">
                <span>67</span>
                <span>个</span>
              </span>
            </li>
          </ul>
        </section>
        <section className="bottom">
          <section className="title">水利工程</section>
          <ul>
            <li>
              <span className="text">水闸</span>
              <span className="num">
                <i>67</i>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">泵站</span>
              <span className="num">
                <i>35</i>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">取水口</span>
              <span className="num">
                <i>25</i>
                <span>处</span>
              </span>
            </li>
          </ul>
        </section>
      </section>
    </section>
  )
}

export default Status
