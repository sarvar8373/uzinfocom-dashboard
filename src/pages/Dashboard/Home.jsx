import React from 'react'
import {Breadcrumb, Button, Col, Row} from 'react-bootstrap'
import {GoSun} from "react-icons/go";
import {FaRegCalendar} from "react-icons/fa";
import img from '../../assets/message.png'
import img2 from '../../assets/map.png'
import img3 from '../../assets/Union.png'
import Progress from '../../components/Progress';
import ChartNumber from '../../components/ChartNumber';
import TableIndex from '../../components/TableIndex';
import Charts from '../../components/Charts';


const Home = () => {
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Hours Studied in Geeksforgeeks',
            data: [4, 1, 1.5],
            backgroundColor: ['#0183C6', '#42BCFB', '#E5EAF1'],
          },
        ],
      };
    
      const options = {
        cutout: '80%',
        plugins: {
          doughnutlabel: {
            labels: [
              {
                text: 'Label in the center',
                font: {
                  size: 20, // Font size
                },
                color: '#333', // Text color
              },
            ],
          },
        },
      };
    return (
        <div>
            <div className='head d-flex flex-wrap justify-content-between'>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item active>Pages</Breadcrumb.Item>
                        <Breadcrumb.Item active>Umumiy statistika</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>Asosiy Dashboard</h2>
                </div>
                <div>
                    <Button className='bg-light border-0 text-primary my-4'>
                        <GoSun/></Button>
                    <Button className='bg-light border-0 text-secondary'>
                        <FaRegCalendar/>
                        mm/dd/2023</Button>
                </div>
            </div>
            <div className='cards d-flex flex-wrap'>
                <div
                    className='card border-0'
                    style={{
                    width: "400px"
                }}>
                    <div className='d-flex flex-nowrap justify-content-between'>

                        <div>
                            <h3 className='card-title '>Murojaatlar soni</h3>
                            <p className='card-text text-secondary'>Barcha murojaatlar</p>
                            <Charts data={data} options={options} />
                           
                        </div>
                        <div>
                            <div className='card-image px-2 py-3'>
                                <img src={img} alt=""/>
                            </div>
                            <div className='card border-0 wth '>
                                <ChartNumber title="Yangi" procent="15%" number="120 350"/>
                                <ChartNumber title="Jarayonda" procent="75%" number="120 350" color={"#E5EAF1"}/>
                                <ChartNumber title="Ko'rib chiqilgan" procent="35%" number="120 350" color={"#0183C6"}/>
                            </div>
                        </div>

                    </div>
                </div>

                <div
                    className='card border-0'
                    style={{
                    width: "400px"
                }}>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <div>
                            <h3 className='card-title'>Hududlar kesimida eng ko’p murojaatlar</h3>
                            <div className='card-groups'>
                                <Col className='colum d-flex pt-2'>
                                    <span className='circle mx-2'>1832</span>
                                    <p className='group-text'>1832 ming murojaat surxondaryo
                                        <br/>viloyatidan</p>
                                </Col>
                                <Col className='colum d-flex pt-2'>
                                    <span
                                        className='circle mx-2'
                                        style={{
                                        backgroundColor: "#4318FF"
                                    }}>1832</span>
                                    <p className='group-text'>1832 ming murojaat surxondaryo
                                        <br/>viloyatidan</p>
                                </Col>
                                <Col className='colum d-flex pt-2'>
                                    <span
                                        className='circle mx-2'
                                        style={{
                                        background: "#18D5FF"
                                    }}>1832</span>
                                    <p className='group-text'>1832 ming murojaat surxondaryo
                                        <br/>viloyatidan</p>
                                </Col>
                            </div>

                        </div>

                        <img src={img2} alt="" className='card-image px-2 py-3'/>
                    </div>
                </div>

                <div
                    className='card border-0'
                    style={{
                    width: "700px"
                }}>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <div>
                            <h3 className='card-title'>Kelib tushgan murojaatlarda eng ko’p kotarilgan masalalar</h3>

                        </div>
                        <div
                            className=' pb-2'
                            style={{
                            width: "100%",
                            height: "340px"
                        }}>
                            <Progress
                                titlle={"Uy joy bilan taminlash"}
                                procent={25}
                                wgProcent={"25%"}
                                procentText={"23.28%"}/>
                            <Progress
                                titlle={"Prezident shaxsiy qabuli"}
                                procent={35}
                                wgProcent={"35%"}
                                procentText={"23.28%"}/>
                            <Progress
                                titlle={"Ko’chmas mulk obyektlariga mulkiy..."}
                                procent={45}
                                wgProcent={"45%"}
                                procentText={"23.28%"}/>
                            <Progress
                                titlle={"Oilaviy nizolars"}
                                procent={55}
                                wgProcent={"55%"}
                                procentText={"23.28%"}/>
                            <Progress
                                titlle={"Mahalla ichki yo’llarini qurish to’g’risida"}
                                procent={65}
                                wgProcent={"65%"}
                                procentText={"23.28%"}/>
                            <Progress
                                titlle={"Davolanish va Jarrohlik amaliyoti masalasida"}
                                procent={65}
                                wgProcent={"65%"}
                                procentText={"23.28%"}/>
                            <Progress
                                titlle={"yashash sharoitini yaxshilash to’g’risida"}
                                procent={65}
                                wgProcent={"65%"}
                                procentText={"23.28%"}/>
                            <Progress
                                titlle={"Muhtojlarga bir martalik moddiy yordam to’g’risida"}
                                procent={65}
                                wgProcent={"65%"}
                                procentText={"23.28%"}/>

                        </div>
                        <img src={img3} alt="" className='card-image px-2 py-3'/>
                    </div>
                </div>
                <TableIndex width={"560px"}/>
                
            </div>

        </div>
    )
}

export default Home