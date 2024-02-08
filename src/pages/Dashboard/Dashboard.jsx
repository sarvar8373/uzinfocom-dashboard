import React from 'react'
import {Col} from 'react-bootstrap'
import './Dashboard.css'
import Sidebar from '../../components/Sidebar'
import Home from './Home'
import img from '../../assets/Naqsh 2.png'
import img2 from '../../assets/Vector.png'
import {Route, Routes} from 'react-router-dom'
import Hudud from '../Hudud/Hudud'
import Sohalar from '../Sohalar/Sohalar'
import QuyiTashkilot from '../Tashkilot/QuyiTashkilot'
import TopHudud from '../Tashkilot/TopHudud'
import TopMasala from '../Tashkilot/TopMasala'
import Muddat from '../Tashkilot/Muddat'

const Dashboard = () => {
    return (
        <div className='d-flex'>
            <Col className='sidebar d-flex flex-column justify-content-between'><Sidebar/>
                <img src={img2} // width="100%"
                    // height="250"
                    className="d-inline-block align-top" alt="React Bootstrap logo"/></Col>
            <Col className='body'>
                <img
                    src={img}
                    className="d-inline-block naqsh align-top"
                    alt="React Bootstrap logo"/>
                <div className='rel'>
                    <Routes>
                        <Route path="/" element={< Home />}/>
                        <Route path="/hududlar" element={< Hudud />}/>
                        <Route path="/sohalar/" element={< Sohalar />}/>
                        <Route path="/tashkilot" element={< QuyiTashkilot />}/>
                        <Route path="/tashkilot/top-tuman" element={< TopHudud />}/>
                        <Route path="/tashkilot" element={< QuyiTashkilot />}/>
                        <Route path="/tashkilot/top-masala" element={< TopMasala />}/>
                        <Route path="/tashkilot/muddati" element={< Muddat />}/>
                    </Routes>

                </div>
            </Col>
        </div>
    )
}

export default Dashboard