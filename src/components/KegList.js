import React from "react";

import { Row, Col } from "react-bootstrap";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <Row className="mb-4">
        {props.kegList.map((keg) => (
          <Col lg="3">{keg.pints === 0 ? <Keg whenKegClicked={props.onKegSelection} pintControl={props.fillAKeg} name={keg.name} pints={keg.pints} status={keg.status} id={keg.id} key={keg.id} buttonText="Fill" /> : <Keg whenKegClicked={props.onKegSelection} pintControl={props.sellAPint} name={keg.name} pints={keg.pints} status={keg.status} id={keg.id} key={keg.id} buttonText={props.buttonText} />}</Col>
        ))}
      </Row>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
};

export default KegList;
