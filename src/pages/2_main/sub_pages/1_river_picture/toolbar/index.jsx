import React, { useEffect, useRef } from 'react'
import { getChildNode, getTopElement } from '../../../../../utils/utils'
import './style.scss'

/* 工具条 */
export default function ToolBar() {
  const toolbarListRef = useRef()
  useEffect(() => {
    toolbarListRef.current.addEventListener(
      'click',
      (evt) => {
        const liDom = evt.target.classList.contains('toolbar-list-item')
          ? evt.target
          : getTopElement(evt.target, 'toolbar-list-item')

        const clickList = getChildNode(toolbarListRef.current)
        clickList.forEach((item) => {
          item.classList.remove('toolbar-list-item-active')
        })

        liDom.classList.toggle('toolbar-list-item-active')
      }
    )
  }, [])
  return (
    <div className="toolbar">
      <ul className="toolbar-list" ref={toolbarListRef}>
        <li className="toolbar-list-item">
          <span className="item-box">
            <i className="icon iconfont icontuceng1" />
            <span>图层</span>
          </span>
        </li>
        <li className="toolbar-list-item">
          <span className="item-box">
            <i className="icon iconfont icondingwei" />
            <span>坐标</span>
          </span>
        </li>
        <li className="toolbar-list-item">
          <span className="item-box">
            <i className="icon iconfont iconpan_icon" />
            <span>标绘</span>
          </span>
        </li>
        <li className="toolbar-list-item">
          <span className="item-box">
            <i className="icon iconfont iconceliang" />
            <span>测算</span>
          </span>
        </li>
        <li className="toolbar-list-item">
          <span className="item-box">
            <i className="icon iconfont iconzhongdianbiaozhu" />
            <span>标注</span>
          </span>
        </li>
        <li className="toolbar-list-item">
          <span className="item-box">
            <i className="icon iconfont iconshijian" />
            <span>时间线</span>
          </span>
        </li>
        <li className="toolbar-list-item">
          <span className="item-box">
            <i className="icon iconfont iconqingchu" />
            <span>清除</span>
          </span>
        </li>
      </ul>
    </div>
  )
}
