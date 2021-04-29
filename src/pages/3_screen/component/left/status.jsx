import React from 'react'
import { Progress } from 'antd'

function Status(props) {
  const { type, children, basicData } = props
  const {
    CountPrinceRiver = '',
    CountMunicipalRiver = '',
    CountCountryRiver = '',
    CountPool = '',
    CountReservoir = '',
    CountLake = '',
    CountWaterLock = '',
    CountPumpStation = '',
    CountOther = ''
  } = basicData

  const showStatusModal = (e) => {
    e.target.classList.toggle('active')
    const statusModal = document.querySelector('.status-modal')
    statusModal.classList.toggle('active')
  }

  return (
    <section className="block status">
      {children}
      <section className="content">
        <section className="top">
          <section className="title">
            水域现状
            {type !== 'horizon' ? <button type="button" onClick={showStatusModal} /> : null}
          </section>
          <ul>
            <li>
              <span className="text">省级河道</span>
              <Progress percent={CountPrinceRiver} size="small" showInfo={false} />
              <span className="num">
                <span>{CountPrinceRiver}</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">市级河道</span>
              <Progress percent={CountMunicipalRiver} size="small" showInfo={false} />
              <span className="num">
                <span>{CountMunicipalRiver}</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">乡级河道</span>
              <Progress percent={CountCountryRiver} size="small" showInfo={false} />
              <span className="num">
                <span>{CountCountryRiver}</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">山塘</span>
              <Progress percent={CountPool} size="small" showInfo={false} />
              <span className="num">
                <span>{CountPool}</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">水库</span>
              <Progress percent={CountReservoir} size="small" showInfo={false} />
              <span className="num">
                <span>{CountReservoir}</span>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">湖泊</span>
              <Progress percent={CountLake} size="small" showInfo={false} />
              <span className="num">
                <span>{CountLake}</span>
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
                <i>{CountWaterLock}</i>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">泵站</span>
              <span className="num">
                <i>{CountPumpStation}</i>
                <span>个</span>
              </span>
            </li>
            <li>
              <span className="text">取水口</span>
              <span className="num">
                <i>{CountOther}</i>
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
