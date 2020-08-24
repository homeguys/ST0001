import React from 'react'
import BasicInfo from '../3_supervision/modal_edit/basic_info'
import PatchInput from '../3_supervision/modal_edit/patch_input'
import SummaryApproval from '../3_supervision/modal_edit/summary_approval'
import ArchivalInfo from '../3_supervision/modal_edit/archival_info'

function ArchivalInfoShow(props) {
  const { type } = props
  return (
    <section className="archival-info-show">
      <BasicInfo type={type} />
      <PatchInput type={type} />
      <SummaryApproval type={type} />
      <ArchivalInfo type={type} />
    </section>
  )
}

export default ArchivalInfoShow
