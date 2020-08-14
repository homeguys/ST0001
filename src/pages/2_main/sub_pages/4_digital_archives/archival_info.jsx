import React from 'react'
import BasicInfo from '../3_supervision/modal_edit/basic_info'
import PatchInput from '../3_supervision/modal_edit/patch_input'
import SummaryApproval from '../3_supervision/modal_edit/summary_approval'
import ArchivalInfo from '../3_supervision/modal_edit/archival_info'

function ArchivalInfoShow() {
  return (
    <section className="archival-info-show">
      <BasicInfo />
      <PatchInput />
      <SummaryApproval />
      <ArchivalInfo />
    </section>
  )
}

export default ArchivalInfoShow
