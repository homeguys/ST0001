/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import moment from 'moment'

function Timer() {
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))

  useEffect(() => {
    setInterval(() => {
      setDate(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
  }, [])

  return <section className="date">{date}</section>
}

export default Timer
