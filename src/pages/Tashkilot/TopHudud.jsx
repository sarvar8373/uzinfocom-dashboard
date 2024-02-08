import React from 'react'
import { Breadcrumb, Button } from 'react-bootstrap'
import { FaRegCalendar } from 'react-icons/fa'
import { GoSun } from 'react-icons/go'
import Tabs from '../../components/Tabs'
import './Tashkilot.css'
import Table from '../../components/Table'

const TopHudud = () => {
    const headers1 = ["T/R", "Tuman/shahar nomi", "3 511", "3 381", "-130", "-4%"];
    const rows1 = [
      ["1", "Yunusobod tumani", "207", "103", "-104", "-50%"],
      ["2", "Yashnobod tumani", "207", "103", "-104", "-50%"],
      ["3", "Olmazor tumani", "207", "103", "-104", "-50%"],
      ["4", "Navoiy shaxri", "207", "103", "-104", "-50%"],
      ["5", "Uchtepa tumani", "207", "103", "-104", "-50%"],
      ["6", "Sergeli tumani", "207", "103", "-104", "-50%"],
      ["7", "Mirzo Ulugbek tumani", "207", "103", "-104", "-50%"],
      ["8", "Samarqand shahri", "207", "103", "-104", "-50%"],
      ["9", "Dehqonobod tumani", "207", "103", "-104", "-50%"],
      ["10", "Samarqand shahri", "207", "103", "-104", "-50%"],
    ];
  return (
    <div style={{height:"100vh"}}>
       <div className='head d-flex flex-wrap justify-content-between'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item active>Pages</Breadcrumb.Item>
          <Breadcrumb.Item active>Tashkilotlar kesimida</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Top tumanlar</h2>

      </div>
      <div>
        <Button className='bg-light border-0 text-primary my-4'>
          <GoSun /></Button>
        <Button className='bg-light border-0 text-secondary'>
          <FaRegCalendar />
          mm/dd/2023</Button>
      </div>
    </div>
    <div className="tabing">
        <Tabs/>
        <div className="card better-0" style={{height:"616px"}}>
        <div>
  <h3 className='card-title' style={{fontSize:"24px"}}>
    O’zbekiston Respublikasi raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasi </h3>
    <div className="tbl">
      <Table headers={headers1} rows={rows1}/>    
    </div>
    
</div>
      </div>
    </div>
    
    </div>
  )
}

export default TopHudud
