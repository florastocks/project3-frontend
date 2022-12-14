import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { Avatar } from "@mui/material"

const Header = () => {
  return (
    <Navbar id="navbar-container">
      <Container>
        <Navbar.Brand as={Link} to='/' className="brand landing-title-sm">🏡  EarthBnB</Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/all-properties'>All Properties</Nav.Link>
            <NavDropdown title={<Avatar src="./images/blank-profile-picture.webp" />} className="nav-dropdown">
              <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/register'>Register</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/userprofile'>Profile Page</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header