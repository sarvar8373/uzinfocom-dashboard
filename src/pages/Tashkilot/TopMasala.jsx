import React from 'react'
import { Breadcrumb, Button } from 'react-bootstrap'
import { FaRegCalendar } from 'react-icons/fa'
import { GoSun } from 'react-icons/go'
import Tabs from '../../components/Tabs'
import Table from '../../components/Table'

const TopMasala = () => {
  const headers1 = ["T/R", "Masala nomi", "2022 yil", "2023 yil", "Farqi", "O’zgarish"];
  const rows1 = [
    ["1", "Aliment undirish so’rovi", "207", "103", "-104", "50%"],
    ["2", "Oilaviy nizolar", "207", "103", "-104", "50%"],
    ["3", "Yashash sharoitlarini yaxshilash, uy-joyni ta’mirlash va kurish uchun yordam", "207", "103", "-104", "50%"],
    ["4", "Muxtojlarga bir martalik moddiy yordam", "207", "103", "-104", "50%"],
    ["5", "Tadbirkorlik faoliyatini rivojelantirish uchun kredit", "207", "103", "-104", "50%"],
    ["6", "Gaz ballonni suyultirilgan gaz bilan to’ldirishdagi muammolar", "207", "103", "-104", "50%"],
    ["7", "Davolanish va jarrohlik amaliyoti uchun moddiy yordam (mamlakat ichida)", "207", "103", "-104", "50%"],
    ["8", "Surishtiruv va tergov xarakatlaridan norozilik", "207", "103", "-104", "50%"],
    ["9", "Majburiy ijro byurosi xodimi xatti- harakatlari", "207", "103", "-104", "50%"],
    ["10", "Uy-joy bilan ta’minlash", "207", "103", "-104", "50%"],
  ];
  return (
    <div style={{height:"100vh"}}>
    <div className='head d-flex flex-wrap justify-content-between'>
   <div>
     <Breadcrumb>
       <Breadcrumb.Item active>Pages</Breadcrumb.Item>
       <Breadcrumb.Item active>Tashkilotlar kesimida</Breadcrumb.Item>
     </Breadcrumb>
     <h2>Top masala</h2>

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

export default TopMasala
