import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo-1.svg'
import  './scss/navbar.scss';

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <img src={logo} className='logo '/>
        <Navbar.Toggle aria-controls="basic-navbar-nav border-none"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Servuces">Service</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;