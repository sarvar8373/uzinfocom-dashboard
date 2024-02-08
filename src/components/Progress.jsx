import React from 'react'
import { Col } from 'react-bootstrap'

const Progress = ({titlle, procent, wgProcent, procentText}) => {
  return (
    <div className='prog d-flex justify-content-between'>
        <p className='p-0 m-0'>{titlle}</p>
        <Col className='pt-2' xs={5}>
          <div className='progress' role='progressbar' aria-label='Basic example' aria-valuenow={procent}
          aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar" style={{width: `${wgProcent}`, borderRadius: "99px", background: "linear-gradient(to right, #0183C6, #0183C6)"}}>
          </div>
      </div>
        </Col>
      
      {procentText}
  </div>

  )
}

export default Progress
