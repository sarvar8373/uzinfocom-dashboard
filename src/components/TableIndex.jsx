import React from 'react'
import {LuLandmark} from "react-icons/lu";
import {TfiStatsUp} from "react-icons/tfi";
import Table from './Table';
import img4 from '../assets/statis.png'
import img5 from '../assets/statis2.png'
import img6 from '../assets/statis3.png'

const TableIndex = ({none, width, height}) => {
    const headers = ["T/R", "Tuman/Shaxar nomi", "2022 yil", "2023 yil", "Farqi", "O’zgarishi"];
    const rows = [
      ["1", "Yunusobod tumani", "207", "207", "207", "207"],
      ["2", "Yashnobod tumani", "207", "207", "207", "207"],
      ["3", "Olmazor tumani", "207", "207", "207", "207"],
      ["4", "Navoiy Shaxri", "207", "207", "207", "207"],
      ["5", "Uchtepa tumani", "207", "207", "207", "207"],
      ["6", "Samarqand shaxri", "207", "207", "207", "207"],
      ["7", "Dehqonood tumani", "207", "207", "207", "207"],
      ["8", "Qarshi shaxri", "207", "207", "207", "207"],
      ["9", "Sarosiyo tumani", "207", "207", "207", "207"],
      ["10", "Nurota tumani", "207", "207", "207", "207"],
    ];
    const headers1 = ["T/R", "Tashkilotlar nomi", "Jami"];
    const rows1 = [
      ["1", "Energetika vazirligi", "207"],
      ["2", "Qurilish va kommunal xo’jalik vazirligi", "207"],
      ["3", "Kambagallikni qisqartirish va bandlik vazirligi", "207"],
      ["4", "Iqtisodiyot va moliya vazirligi", "207"],
      ["5", "Uchtepa tumani", "207"],
      ["6", "Samarqand shaxri", "207"],
      ["7", "Dehqonood tumani", "207"],
      ["8", "Qarshi shaxri", "207"],
      ["9", "Sarosiyo tumani", "207"],
      ["10", "Nurota tumani", "207"],
    ];
  return (
        <div className='d-flex justify-content-start flex-wrap'>
     <div className='card me-2 border-0 pb-2' style={{width: `${width}`, height:"auto"}}>
         <div>
             <h3 className='card-title' style={{fontSize:"16px", display: `${none}`}}>
                 <TfiStatsUp style={{width: "36px",height: "36px"}} />
                 Murojaatlar eng ko’p tushgan tuman/shaxar dinamikasi</h3>
         </div>
         <div className='mx-3'>
             <Table headers={headers} rows={rows} height={height} />

         </div>
         <img src={img4} alt="" className='card-images px-2 py-3' />
     </div>
     <div className='card me-2 border-0 pb-2' style={{
        width: "480px",
        height:"auto",
        display: `${none}`
    }}>
         <div>
             <h3 className='card-title' style={{fontSize:"16px"}}>
                 <LuLandmark style={{width: "36px", height: "36px" }} />
                 Hozirda murojatlari jarayondagi yuqori tashkilotlar</h3>
         </div>
         <div className='mx-3'>
             <Table headers={headers1} rows={rows1} />
         </div>
         <img src={img5} alt="" className='card-images px-2 py-3' />
     </div>
     <div className='card border-0 pb-2' style={{
        width: "480px",
        height:"auto",
        display: `${none}`
    }}>
         <div>
             <h3 className='card-title' style={{fontSize:"16px"}}>
                 <TfiStatsUp style={{ width: "36px",height: "36px"}} />
                 Murojaatlar eng ko’p tushgan tuman/shaxar dinamikasi</h3>
         </div>
         <div className='mx-3'>
             <Table headers={headers1} rows={rows1} />
         </div>
         <img src={img6} alt="" className='card-images px-2 py-3' />
     </div>
 </div>
  )
}

export default TableIndex