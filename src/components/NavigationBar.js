import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Button} from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Css/style.css';
const Styles = styled.div`
  .navbar {
    background-color: #222;
  

  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    padding-top: 10px;
    &:hover {
      color: white;
    }
  }
`;

class NavigationBar extends Component {
  render() {
    return (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">EgypTTourism</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

          <Nav.Item ClassName="pt-3" >
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/vr">360*</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/booking">حجز</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/about">عنا</Link>
            </Nav.Link>
          </Nav.Item>

        
          <Nav.Item >
          <Nav.Link>
              <Link to="/login">
          <Button   variant="outline-warning ">تسجيل الدخول</Button>{' '}
          </Link>
          </Nav.Link>
          </Nav.Item>

          <Nav.Item  ClassName="rounded-pill" >
          <Nav.Link>
              <Link to="/signup">
          <Button   variant="warning " ClassName="rounded-pill">اشتراك</Button>{' '}
          </Link>
          </Nav.Link>
          </Nav.Item>


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
 );
}
}

export default NavigationBar;