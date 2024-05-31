import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
// import "./Homepage.css";
import Cards from "../../components/Cards";
import HomeCarousal from "../../components/HomeCarousal";
import axios from "axios";

const Home = () => {

  const [userdata,setuserdata]=useState({});

  const getuser=async()=>{
    try {
      const response=await axios.get("http://localhost:4000/login/success",{withCredentials:true});
      console.log("response",response);
      
    } catch (error) {
      
    }
  }


  useEffect(()=>{
    getuser()
  },[])

  return (
    <div>
      <div style={{ backgroundColor: "#3E5D5E", minHeight: "100vh" }}>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand
              href="#home"
              className=" ms-3"
              style={{ color: "#77CF16" }}
            >
            <h3 className="fw-bold">D'watch</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <div className="me-5 underline">
                  <Nav.Link href="#home" className="text-white">
                    Products
                  </Nav.Link>
                </div>
                <div className="me-5 underline">
                  <Nav.Link href="#features" className="text-white">
                    About
                  </Nav.Link>
                </div>
                <div className="me-5 underline">
                  <Nav.Link href="#pricing" className="text-white">
                    Contact
                  </Nav.Link>
                </div>

                <div className="me-5 underline">
                  <Nav.Link href="#pricing" className="">
                    <i
                      className="fa-solid fa-cart-shopping"
                      style={{ color: "#77CF16" }}
                    ></i>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid className="mt-3 ">
          <Row>
            <Col lg={7}  className="">
              <h1 className="home-heading ms-4 text-white">
                This is the time to <br /> transform yourself into a <br /> real
                man
              </h1>
              <p className=" ms-4 text-white mt-3">
                Hanpicked collection of{" "}
                <span style={{ color: "#77CF16" }}>premium</span> time keepers{" "}
                <br /> for all purpose and ages
              </p>
              <p className=" ms-4 text-white mt-4">Featured Collectibles</p>
              <Cards />
            </Col>

            <Col lg={5}>
              <HomeCarousal className=''></HomeCarousal>
            </Col>
          </Row>{" "}
          
        </Container>
      </div>{" "}
    </div>
  );
};

export default Home;