import React from 'react'

const ChartNumber = ({title, procent, number, color}) => {
  return (
    <div className='chrt pt-3'>
     <div className='titles d-flex'>
         <div className='mid-circle me-1' style={{background: `${color}`}}></div>
         <h5 className=''>{title}</h5> <span className='ms-1' style={{ color: "#05CD99" }}>{procent}</span>

     </div>
     <h4 className='number'>{number}</h4>
 </div>                                             
  )
}

export default ChartNumber
