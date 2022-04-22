import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group className="mb-3">
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" name="brand" placeholder="Brand" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" name="price" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="number" name="alcohol" placeholder="Alcohol Content" />
        </Form.Group>
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
