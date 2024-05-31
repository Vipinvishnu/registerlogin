import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Navb() {
  return (
    <div><Container>
    <Navbar  style={{backgroundColor:"white"}}  expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#"><strong>Your Logo</strong></Navbar.Brand>
      </Container>
    </Navbar>
  </Container></div>
  )
}

export default Navb