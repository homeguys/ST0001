import React from 'react'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { changeConfigVisible } from '../../../../../../../store/waterInfo.redux'

/* 水域详情弹框 */
export default function DetailModal() {
  const dispatch = useDispatch()
  const configVisible = useSelector((state) => state.waterInfo.configVisible) // 显影状态
  const layerFields = useSelector((state) => state.waterInfo.layerFields) // 图层字段
  const handleOk = () => {
    dispatch(changeConfigVisible(false))
  }
  const handleCancel = () => {
    dispatch(changeConfigVisible(false))
  }
  console.warn(layerFields)
  return (
    <Modal
      title="显示配置"
      className="water-detail-modal"
      visible={configVisible}
      okText="确定"
      cancelText=""
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <ul className="modal-content">
        <li className="modal-content-th">
          <span>列表名</span>
          <span>显示状态</span>
        </li>
        {
          layerFields.map((item) => (
            !(item.title === '序号' || item.title === '操作')
              ?
              (
                <li className="modal-content-td" key={item.key}>
                  <span>{item.title}</span>
                  <span
                    className={`icon iconfont ${item.className === 'visible' ? 'iconyanjing-' : 'iconyanjing-bi-01'}`}
                    fieldname={item.name}
                    fieldcode={item.key}
                  />
                </li>
              )
              : null
          ))
        }
      </ul>
    </Modal>
  )
}
