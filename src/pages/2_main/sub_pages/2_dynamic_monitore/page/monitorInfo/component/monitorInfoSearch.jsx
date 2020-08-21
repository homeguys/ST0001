import React, { useEffect, useState } from 'react'
import { Cascader, Select, Button } from 'antd'
import { useSelector } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons'
import TableInfo from './tableInfo'

const { Option } = Select
/* 搜索条件 */
function SearchCondition(params) {
  // 菜单数据
  const issueData = useSelector((state) => state.monitor.issueData) // 监测期次菜单数据
  const yearData = [] // 年份数据
  const quarterlyData = {} // 季度数据
  // 处理监测期次菜单数据赋值
  issueData.forEach((item) => {
    yearData.push(item.name)
    const quarterlyArray = []
    if (item.children) {
      item.children.forEach((element) => {
        quarterlyArray.push(element.name)
      })
    }
    quarterlyData[item.name] = quarterlyArray
  })

  const [selectedYear, setSelectedYear] = useState(yearData[0])
  const [quarterlys, setQuarterlys] = useState(quarterlyData[yearData[0]])
  const [secondQuarterly, setSecondQuarterly] = useState(quarterlyData[yearData[0]][0])
  const [selectedTown, setSelectedTown] = useState(['德清县'])
  // 乡镇数据
  const towns = [
    '武康街道',
    '舞阳街道',
    '阜溪街道',
    '下渚湖街道',
    '乾元镇',
    '新市镇',
    '洛舍镇',
    '钟管镇',
    '雷甸镇',
    '禹越镇',
    '新安镇',
    '莫干山镇'
  ]
  const options = [
    {
      value: '德清县',
      label: '德清县',
      children: []
    }
  ]

  towns.forEach((item) => {
    const obj = {
      value: item,
      label: item
    }
    options[0].children.push(obj)
  })

  // 乡镇切换
  const townChange = (value) => {
    setSelectedTown(value)
  }

  // 年份选择事件
  const handleYearChange = (val) => {
    setSelectedYear(val) // 年份
    setQuarterlys(quarterlyData[val]) // 年份对应季度
    setSecondQuarterly(quarterlyData[val][0]) // 季度
  }

  // 季度选择事件
  const onSecondQuarterlyChange = (val) => {
    setSecondQuarterly(val)
  }

  // 执行查询
  const excuteSearch = () => {
    const params = {
      town: selectedTown[selectedTown.length - 1],
      year: selectedYear,
      quarterly: secondQuarterly
    }
    console.warn(params)
  }

  return (
    <div className="info-search">
      <Cascader value={selectedTown} options={options} onChange={townChange} changeOnSelect />
      <Select
        value={selectedYear}
        onChange={handleYearChange}
      >
        {
          yearData.map((year) => (
            <Option key={year}>{year}</Option>
          ))
        }
      </Select>
      <Select
        value={secondQuarterly}
        onChange={onSecondQuarterlyChange}
      >
        {
          quarterlys.map((quarterly) => (
            <Option key={quarterly}>{quarterly}</Option>
          ))
        }
      </Select>
      <p className="search-btn"><Button onClick={excuteSearch} icon={<SearchOutlined />} type="primary">查询</Button></p>
    </div>
  )
}

/* 搜索条件 */
export default function MonitorInfoSearch() {
  return (
    <div className="monitor-info-search">
      <SearchCondition />
      <TableInfo />
    </div>
  )
}
