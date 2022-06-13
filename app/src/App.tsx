import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Sample from "./components/Sample";

/** sdssdsdsd */
// dssddsd
function App() {
  return (
    <div>
      <Button>aaaa</Button>
      <div className="mycontainer">
        <div className="myitem">item 1</div>
        <div className="myitem">item 1</div>
      </div>
      <Container>
        <Row>
          <Col xs={6} lg={3}>
            item 1/4
          </Col>
          <Col xs={6} lg={3}>
            item 2/4
          </Col>
          <Col xs={6} lg={3}>
            item 3/4
          </Col>
          <Col xs={6} lg={3}>
            item 4/4
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            item 1/2
          </Col>
          <Col xs={12} lg={6}>
            item 2/2
          </Col>
        </Row>
      </Container>
      <hr />
      <Sample sampleValue="testtttt" />
    </div>
  );
}

export default App;
