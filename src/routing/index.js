import React from "react";
import CovidStats from '../covid';
import News from '../news';
import StateHeader from '../states';
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

  <Dropdown.Menu
  style={{ maxHeight: "75vh","overflowY":"scroll" }}
  >
    <Dropdown.Item><Link to={{ pathname: "/al", full:"Alabama" }}>Alabama</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ak", full:"Alaska" }}>Alaska</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/az", full:"Arizona" }}>Arizona</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ar", full:"Arkansas" }}>Arkansas</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ca", full:"California" }}>California</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/co", full:"Colorado" }}>Colorado</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ct", full:"Connecticut" }}>Connecticut</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/de", full:"Delaware" }}>Delaware</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/dc", full:"District of Columbia" }}>District of Columbia</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/fl", full:"Florida" }}>Florida</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ga", full:"Georgia" }}>Georgia</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/hi", full:"Hawaii" }}>Hawaii</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/id", full:"Idaho" }}>Idaho</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/il", full:"Illinois" }}>Illinois</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/in", full:"Indiana" }}>Indiana</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ia", full:"Iowa" }}>Iowa</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ks", full:"Kansas" }}>Kansas</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ky", full:"Kentucky" }}>Kentucky</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/la", full:"Lousiana" }}>Louisiana</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/me", full:"Maine" }}>Maine</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/md", full:"Maryland" }}>Maryland</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/mi", full:"Michigan" }}>Michigan</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/mn", full:"Minnesota" }}>Minnesota</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ms", full:"Mississippi" }}>Mississippi</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/mo", full:"Missouri" }}>Missouri</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/mt", full:"Montana" }}>Montana</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ne", full:"Nebraska" }}>Nebraska</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/nv", full:"Nevada" }}>Nevada</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/nh", full:"New Hampshire" }}>New Hampshire</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/nj", full:"new Jersey" }}>New Jersey</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/nm", full:"New Mexico" }}>New Mexico</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ny", full:"New York" }}>New York</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/nc", full:"North Carolina" }}>North Carolina</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/nd", full:"North Dakota" }}>North Dakota</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/oh", full:"Ohio" }}>Ohio</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ok", full:"Oklahoma" }}>Oklahoma</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/or", full:"Oregon" }}>Oregon</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/pa", full:"Pennsylvania" }}>Pennsylvania</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ri", full:"Rhode Island" }}>Rhode Island</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/sc", full:"South Carolina" }}>South Carolina</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/sd", full:"South Dakota" }}>South Dakota</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/tn", full:"Tennessee" }}>Tennessee</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/tx", full:"Texax" }}>Texas</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/ut", full:"Utah" }}>Utah</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/vt", full:"Vermont" }}>Vermont</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/va", full:"Virginia" }}>Virginia</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/wa", full:"Washington" }}>Washington</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/wv", full:"West Virgina" }}>West Virginia</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/wi", full:"Wisconsin" }}>Wisconsin</Link></Dropdown.Item>
    <Dropdown.Item><Link to={{ pathname: "/wy", full:"Wyoming" }}>Wyoming</Link></Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<a href='https://ko-fi.com/F1F01P2TO' target='_blank'><img height='36' style={{border:"0px",height:"36px"}} src='https://cdn.ko-fi.com/cdn/kofi4.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
</Navbar>

      <div 
      style={{
        paddingTop: "4.5rem"
      }}
        >
        <Switch>
          <Route path="/:id" render={(props) => 
            <Container>
            <Row>
              <Col>
                <StateHeader {...props} />
              </Col>
            </Row>
              <Row>
                <Col>
                  <CovidStats {...props} />
                </Col>
                <Col lg={6} md={12}>
                  <News {...props} />
                </Col>
                <Col>
                  <Unemployment {...props} />
                </Col>
              </Row>
            </Container>
          } />
          <Route path="/">
          <Container>
          <Row>
          <Col>
          <div>
            <h1>Welcome to BacktoWork.us</h1>
            <p>This site aims to deliver accurate, up-to-date information regarding states' coronavirus recovery efforts
            and paths to reopening. To begin, choose your state by clicking on the green button in the upper left-hand corner. </p>
            </div>
            </Col>
            </Row>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}