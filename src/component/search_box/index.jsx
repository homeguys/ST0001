import React from 'react'
import { DatePicker, Select } from 'antd'
import formSubmit from '../hoc_component/form_submit'

import './style.scss'

const { Option } = Select

@formSubmit()
class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.endTime = new Date()
  }

  render() {
    const { getField = () => {}, search } = this.props
    const { defaultProdcut } = search
    const { cycles, sateAndSensors } = defaultProdcut

    return (
      <div className="search-box">
        <div className="item">
          <span className="title">开始时间：</span>
          <div className="form-item">
            <DatePicker
              showToday={false}
              format="YYYY-MM-DD"
              allowClear={false}
              {...getField('beginTime')}
            />
          </div>
        </div>
        <div className="item">
          <span className="title">结束时间：</span>
          <div className="form-item">
            <DatePicker
              showToday={false}
              format="YYYY-MM-DD"
              allowClear={false}
              {...getField('endTime')}
            />
          </div>
        </div>
        <div className="item">
          <span className="title">周期：</span>
          <div className="form-item">
            <Select placeholder="请选择下拉" style={{ width: '100%' }} {...getField('cycle')}>
              {cycles &&
                cycles.map((item) => (
                  <Option value={item.key} key={item.key}>
                    {item.value}
                  </Option>
                ))}
            </Select>
          </div>
        </div>
        <div className="item">
          <span className="title">卫星/传感器：</span>
          <div className="form-item">
            <Select
              placeholder="请选择下拉"
              style={{ width: '100%' }}
              {...getField('sateAndSensor')}
            >
              {sateAndSensors &&
                sateAndSensors.map((item) => (
                  <Option value={item} key={item}>
                    {item}
                  </Option>
                ))}
            </Select>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBox
