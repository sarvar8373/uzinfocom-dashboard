import React from 'react';
import { useLocation } from 'react-router-dom'; // Add this import
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import img from '../assets/logo.png';
import { RxDashboard } from "react-icons/rx";
import { PiMapPinLineLight, PiSuitcaseLight, PiDoorLight } from "react-icons/pi";

const Sidebar = () => {
    const location = useLocation(); // This is how you use useLocation

    return (
        <Nav
            defaultActiveKey="/home"
            className="flex-column justify-content-between flex-nowrap"
            style={{
                height: "auto"
            }}>
            <div>
                <Navbar.Brand className='side' href="#home">
                    <img
                        src={img}
                        width="118"
                        height="56"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <div className='links'>
                    <Nav.Link className='lnk ps-0' href="/" active={location.pathname === "/"}>
                        <div className='side'>
                            <RxDashboard className='icon' width={26} height={26} /> Umumiy statistika
                        </div>
                    </Nav.Link>
                    <Nav.Link className='lnk ps-0' href='/hududlar' eventKey="link-1" active={location.pathname === "/hududlar"}>
                        <div className='side'>
                            <PiMapPinLineLight className='icon' width={26} height={26} /> Hududlar kesimida
                        </div>
                    </Nav.Link>
                    <Nav.Link className='lnk ps-0' href='/sohalar' eventKey="link-2" active={location.pathname === "/sohalar"}>
                        <div className='side'>
                            <PiSuitcaseLight className='icon' width={26} height={26} /> Sohalar kesimida
                        </div>
                    </Nav.Link>
                    <Nav.Link className='lnk ps-0' href='/tashkilot' eventKey="link-3" active={location.pathname === "/tashkilot" 
                    || location.pathname === "/tashkilot/top-tuman" 
                    || location.pathname === "/tashkilot/top-masala"
                    || location.pathname === "/tashkilot/muddati"
                    }>
                        <div className='side'>
                            <PiDoorLight className='icon' width={26} height={26} /> Tashkilotlar kesimida
                        </div>
                    </Nav.Link>
                </div>
            </div>
        </Nav>
    );
};

export default Sidebar;
