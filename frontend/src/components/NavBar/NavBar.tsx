import type { FC } from 'react';
import './NavBar.scss';
import { Container, Nav, Navbar } from "react-bootstrap";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <div className="NavBar">
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">עזרה בדרכים🛣️</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">בית</Nav.Link>
            <Nav.Link href="#features">כניסה</Nav.Link>
            <Nav.Link href="#pricing">הרשמה</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
);

export default NavBar;
