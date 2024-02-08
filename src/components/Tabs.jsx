import React from 'react'
import { Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

const Tabs = () => {
    const location = useLocation(); 
  return (
    <div>
     <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="/tashkilot" active={location.pathname === "/tashkilot"}>Top quyi tashkilotlar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/tashkilot/top-tuman" active={location.pathname === "/tashkilot/top-tuman"}>Top tumanlar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link  href="/tashkilot/top-masala" active={location.pathname === "/tashkilot/top-masala"}>Top masalalar</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/tashkilot/muddati' active={location.pathname === "/tashkilot/muddati"}>Muddati buzilgan</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default Tabs
