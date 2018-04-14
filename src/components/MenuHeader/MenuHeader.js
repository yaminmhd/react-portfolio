import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import "./MenuHeader.css";
import Scrollchor from "react-scrollchor";

export default class MenuHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          className="fixed-top nav-sticky"
          color="inverse"
          inverse
          toggleable
          expand="md"
        >
          <NavbarBrand>
            <Scrollchor to="#landingpage" className="menu-header-links">
              React Portfolio
            </Scrollchor>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Scrollchor to="#projects" className="menu-header-links">
                  Projects
                </Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="#contact" className="menu-header-links">
                  Contact
                </Scrollchor>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
