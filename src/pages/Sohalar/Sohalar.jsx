import React from 'react'
import { Breadcrumb, Button, ProgressBar } from 'react-bootstrap'
import { FaRegCalendar, FaRegUser  } from 'react-icons/fa'
import { GoHome, GoSun } from 'react-icons/go'
import { LuShieldCheck, LuPercent, LuHeartPulse   } from "react-icons/lu"
import { TbGavel } from "react-icons/tb";
import { RiBankLine } from "react-icons/ri";
import './Sohalar.css'
import ChartNumber from '../../components/ChartNumber'
import { PiGraduationCapDuotone } from "react-icons/pi";

const Sohalar = () => {
  return (
  <div className='mb-5'>
    <div className='head d-flex flex-wrap justify-content-between'>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item active>Pages</Breadcrumb.Item>
          <Breadcrumb.Item active>Sohalar kesimida</Breadcrumb.Item>
        </Breadcrumb>
        <h2>Sohalar kesimida</h2>

      </div>
      <div>
        <Button className='bg-light border-0 text-primary my-4'>
          <GoSun /></Button>
        <Button className='bg-light border-0 text-secondary'>
          <FaRegCalendar />
          mm/dd/2023</Button>
      </div>
    </div>
    <div className='carding d-flex justify-content-between flex-wrap'>
      <div className="card crd border-0">
          <h3 className='card-title d-flex'><div className='iconss' style={{width:"36px", height:"36px"}}><GoHome style={{width:"24px", height:"24px"}}/></div> Uy-joy kommunal xo’jaligi</h3>
          <div className='chartNum d-flex'>
              <ChartNumber title={"2022 yil"} number={"120 350"} />
              <ChartNumber title={"2023 yil"} procent={"+14.45%"} number={"120 350"} color={"#9747FF"}/>
          </div>
          <div className='progs mx-3'>
            <ProgressBar className='mb-2 w-100' variant="info" style={{width: "160px", height:"22px"}} now={40} />
            <ProgressBar className='w-100' style={{width: "160px", height:"22px"}} now={60} />
          </div>
      </div>
      <div className="card crd border-0">
          <h3 className='card-title d-flex'><div className='iconss' style={{width:"36px", height:"36px"}}><LuShieldCheck style={{width:"24px", height:"24px"}}/></div> Xavfsizlik va huquq-tartibot muhofazasi</h3>
          <div className='chartNum d-flex'>
              <ChartNumber title={"2022 yil"} number={"120 350"} />
              <ChartNumber title={"2023 yil"} procent={"+14.45%"} number={"120 350"} color={"#9747FF"}/>
          </div>
          <div className='progs mx-3'>
            <ProgressBar className='mb-2 w-100' variant="info" style={{width: "160px", height:"22px"}} now={40} />
            <ProgressBar className='w-100' style={{width: "160px", height:"22px"}} now={60} />
          </div>
      </div>
      <div className="card crd border-0">
          <h3 className='card-title d-flex'><div className='iconss' style={{width:"36px", height:"36px"}}><PiGraduationCapDuotone style={{width:"24px", height:"24px"}}/></div>Ta’lim va fan</h3>
          <div className='chartNum d-flex'>
              <ChartNumber title={"2022 yil"} number={"120 350"} />
              <ChartNumber title={"2023 yil"} procent={"+14.45%"} number={"120 350"} color={"#9747FF"}/>
          </div>
          <div className='progs mx-3'>
            <ProgressBar className='mb-2 w-100' variant="info" style={{width: "160px", height:"22px"}} now={40} />
            <ProgressBar className='w-100' style={{width: "160px", height:"22px"}} now={60} />
          </div>
      </div>
      <div className="card crd border-0">
          <h3 className='card-title d-flex'><div className='iconss' style={{width:"36px", height:"36px"}}><RiBankLine style={{width:"24px", height:"24px"}}/></div> Bank faoliyati</h3>
          <div className='chartNum d-flex'>
              <ChartNumber title={"2022 yil"} number={"120 350"} />
              <ChartNumber title={"2023 yil"} procent={"+14.45%"} number={"120 350"} color={"#9747FF"}/>
          </div>
          <div className='progs mx-3'>
            <ProgressBar className='mb-2 w-100' variant="info" style={{width: "160px", height:"22px"}} now={40} />
            <ProgressBar className='w-100' style={{width: "160px", height:"22px"}} now={60} />
          </div>
      </div>
    
    <div className="card crd border-0">
          <h3 className='card-title d-flex'><div className='iconss' style={{width:"36px", height:"36px"}}><TbGavel style={{width:"24px", height:"24px"}}/></div> Sud sohasi</h3>
          <div className='chartNum d-flex'>
              <ChartNumber title={"2022 yil"} number={"120 350"} />
              <ChartNumber title={"2023 yil"} procent={"+14.45%"} number={"120 350"} color={"#9747FF"}/>
          </div>
          <div className='progs mx-3'>
            <ProgressBar className='mb-2 w-100' variant="info" style={{width: "160px", height:"22px"}} now={40} />
            <ProgressBar className='w-100' style={{width: "160px", height:"22px"}} now={60} />
          </div>
      </div>
      <div className="card crd border-0">
          <h3 className='card-title d-flex'><div className='iconss' style={{width:"36px", height:"36px"}}><LuPercent style={{width:"24px", height:"24px"}}/></div> Iqtisodiy faoliyat va iqtisodiyotdagi davlat boshqaruvi</h3>
          <div className='chartNum d-flex'>
              <ChartNumber title={"2022 yil"} number={"120 350"} />
              <ChartNumber title={"2023 yil"} procent={"+14.45%"} number={"120 350"} color={"#9747FF"}/>
          </div>
          <div className='progs mx-3'>
            <ProgressBar className='mb-2 w-100' variant="info" style={{width: "160px", height:"22px"}} now={40} />
            <ProgressBar className='w-100' style={{width: "160px", height:"22px"}} now={60} />
          </div>
      </div>
      <div className="card crd border-0">
          <h3 className='card-title d-flex'><div className='iconss' style={{width:"36px", height:"36px"}}><FaRegUser style={{width:"24px", height:"24px"}}/></div> Ijtimoiy himoya</h3>
          <div className='chartNum d-flex'>
              <ChartNumber title={"2022 yil"} number={"120 350"} />
              <ChartNumber title={"2023 yil"} procent={"+14.45%"} number={"120 350"} color={"#9747FF"}/>
          </div>
          <div className='progs mx-3'>
            <ProgressBar className='mb-2 w-100' variant="info" style={{width: "160px", height:"22px"}} now={40} />
            <ProgressBar className='w-100' style={{width: "160px", height:"22px"}} now={60} />
          </div>
      </div>
      <div className="card crd border-0">
          <h3 className='card-title d-flex'><div className='iconss' style={{width:"36px", height:"36px"}}><LuHeartPulse style={{width:"24px", height:"24px"}}/></div> Sog’liqni saqlash</h3>
          <div className='chartNum d-flex'>
              <ChartNumber title={"2022 yil"} number={"120 350"} />
              <ChartNumber title={"2023 yil"} procent={"+14.45%"} number={"120 350"} color={"#9747FF"}/>
          </div>
          <div className='progs mx-3'>
            <ProgressBar className='mb-2 w-100' variant="info" style={{width: "160px", height:"22px"}} now={40} />
            <ProgressBar className='w-100' style={{width: "160px", height:"22px"}} now={60} />
          </div>
      </div>
    <div className="card crd border-0">
          <h3 className='card-title d-flex'><div className='iconss' style={{width:"36px", height:"36px"}}><PiGraduationCapDuotone style={{width:"24px", height:"24px"}}/></div> Talim, fan va madaniyat</h3>
          <div className='chartNum d-flex'>
              <ChartNumber title={"2022 yil"} number={"120 350"} />
              <ChartNumber title={"2023 yil"} procent={"+14.45%"} number={"120 350"} color={"#9747FF"}/>
          </div>
          <div className='progs mx-3'>
            <ProgressBar className='mb-2 w-100' variant="info" style={{width: "160px", height:"22px"}} now={40} />
            <ProgressBar className='w-100' style={{width: "160px", height:"22px"}} now={60} />
          </div>
      </div>
    </div>
 </div>
  )
}

export default Sohalar