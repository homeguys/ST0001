/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react'

const formSubmit = () => (Componnet) => {
  return function WrappedComponnet(props) {
    const { search } = props
    const { defaultProdcut } = search
    let [fields, changeStateFields] = useState(defaultProdcut)

    useEffect(() => {
      changeStateFields(defaultProdcut)
    }, [defaultProdcut])

    // 更新父组件状态
    const onChange = (key) => (e) => {
      const value = e.target ? e.target.value : e

      const { changeFieldsSin } = props
      changeFieldsSin({ key, value }, fields)
    }

    // 父组件获取字段
    const getField = (fieldName) => {
      return {
        onChange: onChange(fieldName),
        value: fields[fieldName]
      }
    }

    const newProps = {
      ...props,
      getField
    }
    return <Componnet {...newProps} />
  }
}

export default formSubmit
