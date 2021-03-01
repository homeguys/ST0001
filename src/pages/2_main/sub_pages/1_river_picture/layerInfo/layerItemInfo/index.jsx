/* eslint-disable */
import React, { useState } from 'react'
import { Select } from 'antd'

const { Option } = Select

/* 信息列表 */
function InfoList(params) {
  const data1 = [
    {
      name: '水域率',
      value: '8.62%'
    },
    {
      name: '水域面积',
      value: '54.39'
    },
    {
      name: '河道',
      value: '12.8789'
    },
    {
      name: '湖泊',
      value: '13.37'
    },
    {
      name: '水库',
      value: '8.34'
    },
    {
      name: '山塘',
      value: '1.44'
    },
    {
      name: '人工水道',
      value: '0.3'
    },
    {
      name: '蓄滞洪区',
      value: '0'
    },
    {
      name: '其他水域',
      value: '3.01'
    }
  ]

  const data2 = [
    {
      name: '水域率',
      value: '-0.12%'
    },
    {
      name: '水域面积',
      value: '-0.3467'
    },
    {
      name: '河道',
      value: '0.1287'
    },
    {
      name: '湖泊',
      value: '-0.2356'
    },
    {
      name: '水库',
      value: '0'
    },
    {
      name: '山塘',
      value: '0'
    },
    {
      name: '人工水道',
      value: '0'
    },
    {
      name: '蓄滞洪区',
      value: '0'
    },
    {
      name: '其他水域',
      value: '-0.0234'
    }
  ]
  return (
    <div className="layer-info-content-list">
      <ul className="layer-info-content-list-left">
        {
          data1.map((item) => {
            return (
              <li key={item.name}>
                <span>{item.name}</span>
                <span>{item.value}</span>
              </li>
            )
          })
        }
      </ul>
      <ul className="layer-info-content-list-right">
        {
          data2.map((item) => {
            return (
              <li key={item.name}>
                <span>{item.value}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

/* 基础信息面板 */
export default function LayerItemInfo() {
  // 乡镇数据
  const towns = [
    '德清县',
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

  const currentYear = (new Date()).getFullYear()

  const baseYears = []
  for (let i = 2017; i <= currentYear; i++) {
    const item = `${i}年`
    baseYears.push(item)
  }

  const [selectedBaseYear, setSelectedBaseYear] = useState(baseYears[baseYears.length - 1])
  const [selectedCompareYear, setSelectedCompareYear] = useState(baseYears[baseYears.length - 2])
  const [selectedTown, setSelectedTown] = useState(towns[0])


  // 行政区域选择
  const handleChange = (val) => {
    setSelectedTown(val) // 行政区域
  }
  // 左侧时间选择
  const baseYearChange = (val) => {
    setSelectedBaseYear(val)
  }
  // 右侧时间选择
  const compareYearChange = (val) => {
    setSelectedCompareYear(val)
  }
  return (
    <div className="layer-info-item">
      <section className="search-box">
        <span className="search-box-label">行政区划：</span>
        <Select
          value={selectedTown}
          onChange={handleChange}
        >
          {
            towns.map((town) => (
              <Option key={town}>{town}</Option>
            ))
          }
        </Select>
      </section>
      <section className="layer-info-content">
        <p className="layer-info-content-title">
          <span>
            {selectedTown}
            水域基本信息
          </span>
          <span>(单位:km²)</span>
        </p>
        <div className="layer-info-content-select">
          <div class="layer-info-content-select-left">
            <Select
              value={selectedBaseYear}
              onChange={baseYearChange}
            >
              {
                baseYears.map((year) => (
                  <Option key={year}>{year}</Option>
                ))
              }
            </Select>
          </div>
          <div class="layer-info-content-select-right">
            <span className="layer-info-content-select-label">较</span>
            <Select
              value={selectedCompareYear}
              onChange={compareYearChange}
            >
              {
                baseYears.map((year) => (
                  <Option key={year}>{year}</Option>
                ))
              }
            </Select>
          </div>
        </div>
        <InfoList />
      </section>
    </div>
  )
}
