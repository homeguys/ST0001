import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { changePageType } from '../../../../../../../store/waterInfo.redux'
/* 选中tab页 */
export default function SelectTab(props) {
  const { tabList, btnName, type } = props
  const dispatch = useDispatch()

  // 按钮点击事件
  const btnClick = () => {
    if (type === 'statistic') {
      dispatch(changePageType('info'))
    } else {
      dispatch(changePageType('statistic'))
    }
  }
  return (
    <div className="select-Tab">
      <ul className="select-Tab-ul">
        {
          tabList.map((tab) => (
            <li key={tab}>{tab}</li>
          ))
        }
      </ul>
      <Button type="primary" onClick={btnClick}>{btnName}</Button>
    </div>
  )
}
