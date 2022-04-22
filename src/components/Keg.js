import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

function Keg(props) {
  return (
    <React.Fragment>
      <Card className="p-4 mb-4">
        <div class="keg" onClick={() => props.whenKegClicked(props.id)}>
          {/* We add a div with an onClick function. Don't forget to close out the div below! */}
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Pints: {props.pints}
            <div class="status">{props.status}</div>
          </Card.Text>
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
