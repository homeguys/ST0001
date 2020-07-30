import React from 'react'
import { connect } from 'react-redux'
import { getDateByIssue } from '../../utils/utils'
import './style.scss'

@connect((state) => ({ search: state.search }), {})
class TifTips extends React.PureComponent {
  componentDidMount() {}

  render() {
    const { search } = this.props
    const { defaultDataList, defaultProdcut } = search
    const { name = '', issue = '' } = defaultDataList
    const { sateAndSensor } = defaultProdcut

    return (
      <>
        {Object.keys(defaultDataList).length ? (
          <div className="tif-tips">
            {`${getDateByIssue(issue, false)} ${sateAndSensor} ${name}产品`}
          </div>
        ) : null}
      </>
    )
  }
}

export default TifTips
