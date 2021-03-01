import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sliderbar from '../../../../component/sliderbar'
import AccountTitle from './component/accountTitle'
import AccountTable from './component/accountTable'
import AccountModal from './component/accountModal'
import { getIssueMenuData } from '../../../../store/monitor.redux'
import './style.scss'

export default function AccountManage(params) {
  const issueData = useSelector((state) => state.monitor.issueData)
  const dispatch = useDispatch()
  useEffect(() => {
    // 初始化请求菜单数据
    dispatch(getIssueMenuData())
  }, [])

  // 改变选中菜单期次
  const changeIssue = useCallback((selectedIssue, titleIssue) => {
    console.warn(selectedIssue)
    console.warn(titleIssue)
    // // 切换选中状态
    // dispatch(changeSelectedIssue(selectedIssue, titleIssue))
    // // 请求监测数据
    // dispatch(getMonitorData(selectedIssue))
  })
  return (
    <div className="page-content" id="account-manage">
      <section className="page-content-left">
        <article className="slider-title">档案题目</article>
        <Sliderbar dataSource={issueData} changeIssue={changeIssue} />
      </section>
      <section className="page-content-right">
        <AccountTitle />
        <AccountTable />
        <AccountModal />
      </section>
    </div>
  )
}
