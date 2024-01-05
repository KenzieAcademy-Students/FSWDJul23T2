import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#1D3868" }}>
        <Navbar.Brand>
          <div
            className="d-flex align-items-center ml-1"
            style={{ color: "white", cursor: "pointer", marginRight: "20px" }}
          >
            Kenzie ToDo
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto mr-5"
            style={{ justifyContent: "center" }}
          ></Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
