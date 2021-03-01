import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sliderbar from '../../../../../../component/sliderbar'
import MonitorContent from './component/monitorContent'
import { getIssueMenuData, changeSelectedIssue, getMonitorData } from '../../../../../../store/monitor.redux'
import './style.scss'

/* 动态监测页面 */
export default function DynamicMonitore(props) {
  const issueData = useSelector((state) => state.monitor.issueData)
  const dispatch = useDispatch()
  useEffect(() => {
    // 初始化请求菜单数据
    dispatch(getIssueMenuData())
  }, [])

  // 改变选中菜单期次
  const changeIssue = useCallback((selectedIssue, titleIssue) => {
    // 切换选中状态
    dispatch(changeSelectedIssue(selectedIssue, titleIssue))
    // 请求监测数据
    dispatch(getMonitorData(selectedIssue))
  })

  return (
    <div className="page-content monitor-base">
      <section className="page-content-left">
        <article className="slider-title">季度监测</article>
        <Sliderbar dataSource={issueData} changeIssue={changeIssue} />
      </section>
      <section className="page-content-right">
        <MonitorContent />
      </section>
    </div>
  )
}
