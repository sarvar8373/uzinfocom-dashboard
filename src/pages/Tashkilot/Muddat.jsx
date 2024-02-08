import React from 'react'
import { Breadcrumb, Button} from 'react-bootstrap';
import { FaRegCalendar } from 'react-icons/fa';
import { GoSun } from 'react-icons/go';
import Tabs from '../../components/Tabs';
import Table from '../../components/Table'

const Muddat = () => {
    const headers1 = ["T/R", "Tashkilot nomi", "Murojaatlar soni"];
    const rows1 = [
      ["1", "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasi", "28"],
      ["2", "Raqobatni rivojlantirish va iste’molchilar  huquqlarini himoya qilish qo’mitasining Buxoro viloyati hududiy boshqarmasi", "28"],
      ["3", "Qoraqalpog’iston Reaspublikasi Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasi", "28"],
      ["4", "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasining Namangan viloyati hududiy boshqarmasi", "28"],
      ["5", "Raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasining Navoiy viloyati hududiy boshqarmasi", "28"],
     
    ];
    return (
      <div style={{height:"100vh"}}>
         <div className='head d-flex flex-wrap justify-content-between'>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item active>Pages</Breadcrumb.Item>
            <Breadcrumb.Item active>Tashkilotlar kesimida</Breadcrumb.Item>
          </Breadcrumb>
          <h2>Top quyi tashkilotlar</h2>
  
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
        <div className="card better-0" style={{height:"auto"}}>
          <div>
    <h3 className='card-title' style={{fontSize:"24px"}}>
      O’zbekiston Respublikasi raqobatni rivojlantirish va iste’molchilar huquqlarini himoya qilish qo’mitasi </h3>
      <div className="tbl ls">
        <Table headers={headers1} rows={rows1}/>    
      </div>
      
  </div>
        </div>
      </div>
      
      </div>
    )
  }

export default Muddat