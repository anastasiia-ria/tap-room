import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

function Keg(props) {
  return (
    <React.Fragment>
      <Card className="p-4 mb-4">
        <div className="keg" onClick={() => props.whenKegClicked(props.id)}>
          <Card.Title>{props.name}</Card.Title>
          <div className="card-text">
            <p>Brand: {props.brand}</p>
            <p>ABV: {props.alcohol}%</p>
            <p>Price: ${props.price}</p>
            <p>Pints: {props.pints}</p>
            <div className="status">{props.status}</div>
          </div>
          <Card.Text></Card.Text>
        </div>
        <Button variant="outline-dark" onClick={() => props.pintControl(props.id)}>
          {props.buttonText}
        </Button>
      </Card>
    </React.Fragment>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
};

export default Keg;
