import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        {/* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h3>{props.name}</h3>
        <p>Pints: {props.pints}</p>
      </div>
      <Button onClick={() => props.whenKegClicked(props.id)}>Sell 1 Pint</Button>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string, // new PropType
  whenKegClicked: PropTypes.func, // new PropType
};

export default Keg;
