
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from "../assets/images/cart.svg";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/avatar.png";

interface LogoProps {
  src: string;
  alt: string;
}

function Logo({ src, alt }: LogoProps) {
  return <img src={src} alt={alt} />;
}

function NavigationLinks() {
  return (
    <Nav className="ml-15">
      <Nav.Link href="#collections">Collections</Nav.Link>
      <Nav.Link href="#men">Men</Nav.Link>
      <Nav.Link href="#women">Women</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  );
}

function MobileIcons() {
  return (
    <div className="items-center space-x-7  ">
      <img src={icon} alt="cart" />
      <img
        src={avatar}
        alt="avatar"
        width={47}
        height={47}
        className="mx-5 "
      />
    </div>
  );
}

function Navigation() {

  
  return (
    <Navbar expand="lg" className="bg-body-tertiary mt-3 ">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Logo src={logo} alt="logo" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavigationLinks />
        </Navbar.Collapse>
        <MobileIcons />
      </Container>
    </Navbar>
  );
}

export default  Navigation;
