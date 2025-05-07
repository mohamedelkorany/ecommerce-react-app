import { Badge, Container, Nav, Navbar, Button } from "react-bootstrap";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageContext } from "../context/langcontext";



export default function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;
  const [lang , ToggleLanguage] = useContext(LanguageContext);
  const language = lang !== "english" ? "english" : "arabic"

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Ecommerce App</Navbar.Brand>
        <Nav className="ms-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/Cart">Cart</Link>
          <Badge bg="secondary mb-4 rounded-circle">{cartCount}</Badge>
          <Link className="nav-link ms-3" to="/register">Register</Link>
          <Button variant="outline-light" onClick = {ToggleLanguage}>{language}</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
