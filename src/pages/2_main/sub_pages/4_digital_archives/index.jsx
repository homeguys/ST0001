import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProjectTree from './project_tree'
import Statistic from './statistic'
import ArchivalInfoShow from './archival_info'
import { getArchivesMenuData } from '../../../../store/main/digital_archives.redux'
import './style.scss'

function DigitalArchives() {
  const archives = useSelector((state) => state.archives)
  const { isStatistic } = archives
  const dispatch = useDispatch()

  useEffect(() => {
    // 初始化请求菜单数据
    dispatch(getArchivesMenuData())
  }, [])

  return (
    <section id="digital-archives">
      <section className="left">
        <ProjectTree />
      </section>
      <section className="right">
        {isStatistic ? <Statistic /> : <ArchivalInfoShow type="archives" />}
      </section>
    </section>
  )
}

export default DigitalArchives
