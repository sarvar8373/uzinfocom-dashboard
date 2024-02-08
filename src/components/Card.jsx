import React from 'react'
import ChartNumber from './ChartNumber'

const Cards = ({icon, title }) => {
  return (
    <div className="card crd border-0">
        <h3 className='card-title d-flex'><div className='icons'>{icon}</div> {title}</h3>
    </div>
  )
}

export default Cards
