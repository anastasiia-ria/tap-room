import React from "react";
import { Nav, Navbar, Form, Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function Header(props) {
  function handleSearchSubmission(event) {
    event.preventDefault();
    props.search(event.target.search.value);
    event.target.search.value = "";
  }

  function handleBack(event) {
    event.preventDefault();
    props.search("");
  }

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" onClick={handleBack}>
            Tap Room
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/" onClick={handleBack}>
              Home
            </Nav.Link>
            <Form onSubmit={handleSearchSubmission} className="d-flex search-bar">
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

Header.propTypes = {
  search: PropTypes.func,
};
export default Header;
