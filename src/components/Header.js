import React from "react";
import { Nav, Navbar, Form, Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function Header(props) {
  function handleSearchSubmission(event) {
    event.preventDefault();
    props.search(event.target.search.value);
  }

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Tap Room</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Form onSubmit={handleSearchSubmission} className="d-flex">
              <Form.Control type="text" placeholder="Search" className="me-2" aria-label="Search" name="search" />
              <Button variant="outline-dark" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

// Header.PropTypes = {
//   search: PropTypes.func,
// };
export default Header;
