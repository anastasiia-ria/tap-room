import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.name}</h3>
      <p>Brand: {keg.brand}</p>
      <p>Price: ${keg.price}</p>
      <p>ABV: {keg.alcohol}%</p>
      <p>Pints: {keg.pints}</p>

      <Button variant="outline-dark" onClick={props.onClickingEdit}>
        Update Keg
      </Button>
      <Button variant="outline-dark" onClick={() => props.onClickingDelete(keg.id)}>
        Delete Keg
      </Button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default KegDetail;
