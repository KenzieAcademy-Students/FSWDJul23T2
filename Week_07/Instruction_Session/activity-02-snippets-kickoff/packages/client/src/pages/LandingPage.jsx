import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LandingHeader } from "../components";

const LandingPage = (props) => {
  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
      <LandingHeader login />
      <Container className="mb-4">
        <Row>
          <Col className="px-5">
            <Row className="py-3">
              <Col xs={12} lg={6}>
                <h4>Share.</h4>
                <p className="landing-text">
                  Kenzie Snippets is a shared social space where you are able to
                  share anything that you have on your mind, exclusively to the
                  Kenzie fam. Have something cool happen in your life? Find a
                  really cool piece of software that needs to be shared? Want
                  some feedback on a design? Create a snip (post) and start
                  chatting.
                </p>
              </Col>
              <Col xs={12} lg={6} className="text-xs-center text-lg-left">
                <img
                  width={484}
                  height={276}
                  style={{ margin: "auto" }}
                  className="ml-3 landing-img-wrapper"
                  src="/landing1.jpg"
                  alt="Media One"
                />
              </Col>
            </Row>
            <Row className="py-3">
              <Col xs={12} lg={6}>
                <h4>Connect.</h4>
                <p className="landing-text">
                  The Kenzie fam is a tight knit group. However, you may not
                  have much exposure to students outside of your pod or program.
                  Snippets allows you to chat with people across the entire
                  Academy, some of which you may not have interacted with
                  otherwise. Take the leap and start connecting!
                </p>
              </Col>
              <Col xs={12} lg={6} className="text-xs-center text-lg-left">
                <img
                  width={484}
                  height={276}
                  className="ml-3 landing-img-wrapper"
                  src="/landing2.jpg"
                  alt="Media One"
                />
              </Col>
            </Row>
            <Row className="py-3">
              <Col xs={12} lg={6}>
                <h4>Collaborate.</h4>
                <p className="landing-text">
                  Want some help on a school project or your side hustle? Create
                  a snip and let the Kenzie fam help you work through whatever
                  you’re facing. Share some code, a design, a process -
                  anything. The Kenzie fam is here to support you and to provide
                  actionable feedback and ideas.
                </p>
              </Col>
              <Col xs={12} lg={6} className="text-xs-center text-lg-left">
                <img
                  width={484}
                  height={276}
                  className="ml-3 landing-img-wrapper"
                  src="/landing3.jpg"
                  alt="Media One"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
