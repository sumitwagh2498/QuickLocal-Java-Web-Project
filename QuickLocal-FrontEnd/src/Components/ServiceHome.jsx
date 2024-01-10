// ServiceHome.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RiMacbookLine, RiStore3Line, RiDatabase2Line, RiPaletteLine, RiAndroidLine, RiAccountBoxLine, RiHandCoinLine, RiEnglishInput } from 'react-icons/ri';
import { NavigationBarOfService } from './NavigationBarOfService';
import '../Style/HomeSp.css';

const ServiceHome = () => {
  return (
    <>
      <NavigationBarOfService />
      <Container>
        <h2 style={{textAlign: 'center', marginTop: ''}}>Our Services</h2>
        <Row className="row service-row">
          {/* First Row */}
          <Col className="service">
            <RiMacbookLine />
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="service">
            <RiStore3Line />
            <h3>Marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="service">
            <RiDatabase2Line />
            <h3>Data Analysis</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="service">
            <RiPaletteLine />
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          {/* Second Row */}
          <Col className="service">
            <RiAndroidLine />
            <h3>App Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="service">
            <RiAccountBoxLine />
            <h3>Accounting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="service">
            <RiHandCoinLine />
            <h3>Business Management</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="service">
            <RiEnglishInput />
            <h3>English Teaching</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServiceHome;
