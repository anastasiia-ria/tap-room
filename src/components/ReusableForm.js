import React from "react";
import PropTypes from "prop-types";
import { Form, Row, Button } from "react-bootstrap";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler} className="justify-content-md-center form-center">
        <Row>
          <Form.Group className="mb-3 col-md-6">
            <Form.Control type="text" name="name" placeholder="Name" defaultValue={props.name} />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6">
            <Form.Control type="text" name="brand" placeholder="Brand" defaultValue={props.brand} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3 col-md-6">
            <Form.Control type="number" name="price" placeholder="Price" defaultValue={props.price} />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6">
            <Form.Control type="number" name="alcohol" placeholder="ABV" defaultValue={props.alcohol} />
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
