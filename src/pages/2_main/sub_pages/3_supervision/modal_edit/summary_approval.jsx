import React from 'react'

function SummaryApproval(props) {
  const { type } = props
  return (
    <section className="summary-approval">
      <section className="modal-edit-title">
        批文摘要
        <i />
        {type !== 'archives' ? (
          <>
            <button type="button" className="iconfont">
              &#xe612;
            </button>
            <button type="button" className="iconfont">
              &#xe645;
            </button>
          </>
        ) : null}
      </section>
      <section className="content">
        <ul>
          <li>1. 2019.5.15 无人机巡查发现，项目未补先占。正落实整改。</li>
          <li>1. 2019.5.15 无人机巡查发现，项目未补先占。正落实整改。</li>
          <li>1. 2019.5.15 无人机巡查发现，项目未补先占。正落实整改。</li>
          <li>1. 2019.5.15 无人机巡查发现，项目未补先占。正落实整改。</li>
        </ul>
      </section>
    </section>
  )
}

export default SummaryApproval
