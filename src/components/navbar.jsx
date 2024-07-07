
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/reset.css'; 
import '../assets/css/navbar.css';

function AppNavbar() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>

            <h1>Tutol</h1>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <LinkContainer to="/" exact>
              <Nav.Link className="nav-link-custom">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/features">
              <Nav.Link className="nav-link-custom">Tutorials</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/pricing">
              <Nav.Link className="nav-link-custom">Testimonials</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#" disabled className="nav-link-custom">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
