import React, { useState } from 'react'
import { Tree } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { changeArchivesMul } from '../../../../store/main/digital_archives.redux'
import './style.scss'

const layerTreeList = [
  {
    title: '2017年审批项目',
    key: '2017',
    disabled: true,
    children: [
      {
        title: '国铁塔股份有限公司湖州市分公司',
        key: 'project1'
      },
      {
        title: '德清县益众码头装卸有限公司',
        key: 'project2'
      },
      {
        title: '德清县陆记建材有限公司',
        key: 'project3'
      },
      {
        title: '嘉善恒磊建筑材料有限公司',
        key: 'project4'
      }
    ]
  },
  {
    title: '2018年审批项目',
    key: '2018',
    disabled: true
  },
  {
    title: '2019年审批项目',
    key: '2019',
    disabled: true
  },
  {
    title: '2020年审批项目',
    key: '2020',
    disabled: true
  }
]

function ProjectTree() {
  const [expandedKeys, setExpandedKeys] = useState(['2017'])
  const dispatch = useDispatch()
  const archives = useSelector((state) => state.archives)
  const { selectedKeys } = archives

  const selectTree = (selectedKeys) => {
    dispatch(
      changeArchivesMul({
        isStatistic: false,
        selectedKeys
      })
    )
  }

  const onExpand = (expandedKeys) => {
    setExpandedKeys(expandedKeys)
  }

  const backStatistic = () => {
    dispatch(
      changeArchivesMul({
        isStatistic: true,
        selectedKeys: []
      })
    )
  }

  return (
    <section className="project-tree">
      <Tree
        treeData={layerTreeList}
        expandedKeys={expandedKeys}
        selectedKeys={selectedKeys}
        onSelect={selectTree}
        onExpand={onExpand}
      />
      <button type="button" className="back-statistic" onClick={backStatistic}>
        返回统计
      </button>
    </section>
  )
}

export default ProjectTree
