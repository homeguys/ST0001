import React, { useEffect } from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getMonitorData, changePageType } from '../../../../../../../store/monitor.redux'
import MonitorMap from './monitorMap'
import MonitorPie from './monitorPie'

/* 监测头部 */
function MonitorTitle(props) {
  const { titleIssue } = props
  return (
    <section className="monitor-title">
      <Button type="primary">＜上一期</Button>
      <span>
        {`地表变化监测${titleIssue}报告`}
      </span>
      <Button type="primary">下一期＞</Button>
    </section>
  )
}

/* 监测报告 */
function MonitorReport(props) {
  const { report } = props
  return (
    <section className="monitor-report">
      <article>
        {report.content}
      </article>
      <span><a rel="noopener noreferrer" href={report.infoUrl} target="_blank">{'报告详细>>'}</a></span>
    </section>
  )
}

/* 监测内容 */
export default function MonitorContent() {
  const monitor = useSelector((state) => state.monitor)
  const dispatch = useDispatch()
  useEffect(() => {
    console.warn(monitor)
    dispatch(getMonitorData(monitor.selectedIssue))
  }, [])
  useEffect(() => {
    console.warn(monitor)
  }, [monitor])

  // 查看详细
  const handleClick = () => {
    dispatch(changePageType('info'))
  }

  const { titleIssue, monitorData } = monitor
  return (
    <div className="monitor-content">
      <MonitorTitle titleIssue={titleIssue} />
      { Object.keys(monitorData).length !== 0
        ? <MonitorReport report={monitorData.report} />
        : null }
      <div className="char-container">
        {
          Object.keys(monitorData).length !== 0
            ? <MonitorMap dataSource={monitorData.distributionData} />
            : null
        }
        {
          Object.keys(monitorData).length !== 0
            ? <MonitorPie dataSource={monitorData.statisticData} />
            : null
        }
        <Button className="char-info-btn" onClick={handleClick}>{'查看详细 >>'}</Button>
      </div>
    </div>
  )
}
