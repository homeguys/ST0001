import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sliderbar from '../../../../component/sliderbar'
import Statistic from './statistic'
import ArchivalInfoShow from './archival_info'
import { getArchivesMenuData } from '../../../../store/main/digital_archives.redux'
import './style.scss'

function DigitalArchives() {
  const menuData = useSelector((state) => state.archives.menuData)
  const dispatch = useDispatch()

  useEffect(() => {
    // 初始化请求菜单数据
    dispatch(getArchivesMenuData())
  }, [])

  return (
    <section id="digital-archives">
      <section className="left">
        <Sliderbar dataSource={menuData} />
      </section>
      <section className="right">
        <Statistic />
        {/* <ArchivalInfoShow /> */}
      </section>
    </section>
  )
}

export default DigitalArchives
