/* eslint-disable no-shadow */
//
import React from 'react'
import { connect } from 'react-redux'
import recompact from 'recompact'
import SearchBox from '../search_box'
import SearchList from '../search_list'
import SearchListInfo from '../search_list_info'
import {
  changeFieldsSin,
  setDefaultDataList,
  showModal,
  downloadAll,
  getRegionsStatistic
} from '../../store/search.redux'
import './style.scss'

const enhance = recompact.compose(
  connect((state) => ({ search: state.search }), {
    changeFieldsSin,
    setDefaultDataList,
    showModal,
    downloadAll,
    getRegionsStatistic
  })
)

@enhance
class InfoBar extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const {
      search,
      setDefaultDataList,
      changeFieldsSin,
      showModal,
      downloadAll,
      getRegionsStatistic
    } = this.props

    return (
      <div id="infobar">
        <article>
          <SearchBox search={search} changeFieldsSin={changeFieldsSin} />
          <SearchList
            search={search}
            setDefaultDataList={setDefaultDataList}
            changeFieldsSin={changeFieldsSin}
            showModal={showModal}
            downloadAll={downloadAll}
            getRegionsStatistic={getRegionsStatistic}
          />
          <SearchListInfo search={search} showModal={showModal} />
        </article>
      </div>
    )
  }
}

export default InfoBar
