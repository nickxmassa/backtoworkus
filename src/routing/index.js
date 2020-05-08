import React from "react";
import CovidStats from '../covid';
import News from '../news';
import Unemployment from '../unemployment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function StateNav() {
  return (
    <Router>
    <Navbar fixed="top" className="bg-light justify-content-between">
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Find Your State
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/al">Alabama</Dropdown.Item>
    <Dropdown.Item href="/ak">Alaska</Dropdown.Item>
    <Dropdown.Item href="/ar">Arkansas</Dropdown.Item>
    <Dropdown.Item href="/pa">Pennsylvania</Dropdown.Item>
    <Dropdown.Item href="/wv">West Virginia</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Navbar>
      <div>
        <h2>States</h2>

        <ul>
          <li>
            <Link to="/md">Maryland</Link>
          </li>
          <li>
            <Link to="/va">Virginia</Link>
          </li>
          <li>
            <Link to="/ak">Alaska</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/:id" render={(props) => 
            <Container>
              <Row>
                <Col>
                  <CovidStats {...props} />
                </Col>
                <Col>
                  <News {...props} />
                </Col>
                <Col>
                  <Unemployment {...props} />
                </Col>
              </Row>
            </Container>
          } />
        </Switch>
      </div>
    </Router>
  );
}