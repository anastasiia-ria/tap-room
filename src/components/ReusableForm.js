import React from "react";
import PropTypes from "prop-types";
import { Form, Row, Button } from "react-bootstrap";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler} className="justify-content-md-center lg-6">
        <Row>
          <Form.Group className="mb-3">
            <Form.Control type="text" name="name" placeholder="Name" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Form.Control type="text" name="brand" placeholder="Brand" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3 col-md-6">
            <Form.Control type="number" name="price" placeholder="Price" />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6">
            <Form.Control type="number" name="alcohol" placeholder="Alcohol Content" />
          </Form.Group>
        </Row>
        <Button variant="outline-dark" className="mb-3" type="submit">
          {props.buttonText}
        </Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
