/* eslint-disable arrow-body-style */
import React from 'react'

const loginSubmit = (type) => (Componnet) => {
  return class WrappedComponnet extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        fields: {}
      }
    }

    // 父组件获取字段
    getField = (fieldName) => ({
      onChange: this.onChange(fieldName)
    })

    // 更新父组件状态
    onChange = (key) => (e) => {
      const event = e.target ? e.target.value : e
      const { fields } = this.state
      fields[key] = event
      this.setState({
        fields
      })
    }

    // 表单提交
    handleSubmit = () => {
      // 登录
      if (type === 'login') {
        const { loginIn } = this.props
        const { fields } = this.state
        loginIn(fields)
      }
    }

    render() {
      const props = {
        ...this.props,
        handleSubmit: this.handleSubmit,
        getField: this.getField
      }
      return <Componnet {...props} />
    }
  }
}

export default loginSubmit
