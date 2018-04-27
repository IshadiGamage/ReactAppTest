import React, { Component } from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import { Router, Route, Switch } from 'react-router';

class NavigationBar extends Component {
    render() {
        return (
            <div className="App">

                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Home</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/about">
                                About
                            </NavItem>

                            <NavItem eventKey={2} href="#">
                                Link 2
                            </NavItem>

                            <NavItem eventKey={3} href="#">
                                About Us
                            </NavItem>

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>;


            </div>
        );
    }
}

export default NavigationBar;










