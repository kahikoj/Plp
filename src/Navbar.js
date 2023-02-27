import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Logout from './Logout'
import { FaPlus, FaBell } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faBell, faBars, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


//Navbar CSS//
import './Navbar.css'


const MyNavbar = () => {
  const handleLogout = () => {
    Logout()
  };

  return (
    <Navbar className="my-navbar" expand="md">
      <div className="my-navbar__left">
        <Navbar.Brand className="my-navbar__brand" href="/Dashboard"> Home </Navbar.Brand>
        <Form inline="true">
          <FormControl className="my-navbar__search" type="text" placeholder="Search" />
        </Form>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto my-navbar__right">
          <Nav.Link href="/tasks/new"><FaPlus className="my-navbar__icon" /></Nav.Link>
          <Nav.Link href="#"><FaBell className="my-navbar__icon" /></Nav.Link>
          <Nav.Link className="my-navbar__logout" onClick={handleLogout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;




