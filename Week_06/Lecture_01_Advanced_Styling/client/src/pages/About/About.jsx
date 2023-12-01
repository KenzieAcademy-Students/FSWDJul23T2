import React from "react";
import { Container } from "react-bootstrap";
import { container } from "./About.module.css";

function About() {
  return (
    <Container>
      <h1>About Us</h1>
      <section className={container}>
        <h3>some stuff</h3>
        <p>s'more stuff</p>
      </section>
    </Container>
  );
}

export default About;
