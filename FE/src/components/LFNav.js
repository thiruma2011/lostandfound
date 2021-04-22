import React, { Component } from 'react'
// import { NavLink, Link } from "react-router-dom";

// import { BurgerIcon } from './'
// import styled from "styled-components";
import '../styles/styles.css'
import '../styles/bootstrap.min.css'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import logo from '../images/logo.gif'
// import styled from "styled-components";

class LFNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isExpanded: false
    }
  }

  handleToggle (e) {
    e.preventDefault()
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  render () {
    // const { isExpanded } = this.state

    return (
      <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark" >
        <Navbar.Brand href = "/" >
          <Image src={logo} height="30" roundedCircle /> help me lah!
        </Navbar.Brand>

        <Navbar.Toggle aria-controls = "responsive-navbar-nav" />

        <Navbar.Collapse id = "responsive-navbar-nav" >
          <Nav className = "mr-auto" >
            <NavDropdown title = "Add Item" id = "collasible-nav-dropdown" >
              <NavDropdown.Item href = "./createfounditem" > Create Item Found </NavDropdown.Item>
              <NavDropdown.Item href = "./createlostitem" > Create item Lost </NavDropdown.Item>
              <NavDropdown.Item href = "./createuser" > Create user </NavDropdown.Item>
            </NavDropdown >

            <NavDropdown title = "View Items" id = "collasible-nav-dropdown" >
              <NavDropdown.Item href = "./showfounditemlist" > View Found items </NavDropdown.Item>
              <NavDropdown.Item href = "./showlostitemlist" > View Lost Item </NavDropdown.Item>
              <NavDropdown.Item href = "./myitemslist" > My items </NavDropdown.Item>
              <NavDropdown.Item href = "./showuserlist" > View Users </NavDropdown.Item>
            </NavDropdown >
          </Nav>
          <Nav >
            <Nav.Link href = "./login" > Login </Nav.Link>
            <Nav.Link href = "./faq" > FAQ </Nav.Link>
            <Nav.Link href = "./about" > About </Nav.Link>
            <Nav.Link href = "./contact" > Contact </Nav.Link>
          </Nav >
        </Navbar.Collapse>
      </Navbar >
    )
  }
}
export default LFNav
