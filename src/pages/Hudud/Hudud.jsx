import React from 'react'
import {Breadcrumb, Button, Col} from 'react-bootstrap'
import { FaRegCalendar } from 'react-icons/fa'
import { GoSun } from 'react-icons/go'
import { PiMapPinLineLight } from 'react-icons/pi'
import TableIndex from '../../components/TableIndex'
import img6 from '../../assets/Naqsh 3.png'
import './Hudud.css'
import img from '../../assets/map2.png'

const Hudud = () => {
    return (
        <div>
            <div className='head d-flex flex-wrap justify-content-between'>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item active>Pages</Breadcrumb.Item>
                        <Breadcrumb.Item active>Hududlar kesimida</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>Hududlar kesimida</h2>
                   
                </div>
                <div>
                    <Button className='bg-light border-0 text-primary my-4'>
                        <GoSun/></Button>
                    <Button className='bg-light border-0 text-secondary'>
                        <FaRegCalendar/>
                        mm/dd/2023</Button>
                </div>
                
            </div>
            <div className='d-flex cf justify-content-between flex-wrap my-4'>
              <Col className='card border-0 mx-3 p-0' style={{height: "904px"}}>
                <div>
                <div className='text-end'>
                            <h3 className='card-title' style={{fontSize:"24px"}}>O‘zbekiston Respublikasi</h3>
                            <p className='card-text pe-4 text-secondary' style={{fontSize:"18px"}}>Murojaatlar soni: 188 528</p>

                        </div>
                    <img src={img} alt="" className=' px-2 py-3' />
                </div>
               <img src={img6} alt="" className='card-images px-2 py-3' />
               <div>
                    <div className='card mt-2 box border-0'>
                        <div className='box-txt'>
                            <h4>01.09.2022</h4>
                            <h3>188 528</h3>
                        </div>
                    </div>
                    <div className='card mt-2 box border-0'>
                    <div className='box-txt'>
                            <h4>01.09.2023</h4>
                            <div className="d-flex ">
                                <h3 className='pe-1'>164 218</h3>
                                <span style={{fontSize:"12px", color:"#05CD99"}}>+2.45%</span>
                            </div>
                        </div>
                    </div>
                    <div className='card mt-2 box border-0'>
                    <div className='box-txt'>
                            <h4>Farqi</h4>
                            <div className="d-flex ">
                                <h3 className='pe-1'>188 528</h3>
                                <span style={{fontSize:"12px", color:"#05CD99"}}>+14.45%</span>
                            </div>
                            
                        </div>
                    </div>
               </div>
               </Col>
              <Col className='card border-0 mx-3' style={{height: "904px"}}>
                <div>
                  <h3 className='card-title' style={{fontSize:"24px"}}>
                      <PiMapPinLineLight style={{width: "36px", height: "36px" }} />
                      Hududlar kesimida dinamika</h3>
                </div>
                <TableIndex none={"none"} width={"100%"} height={"600px"}/>
              </Col>
            </div>
            
        </div>
    )
}

export default Hudud