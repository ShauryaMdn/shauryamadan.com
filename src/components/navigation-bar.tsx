import React, { Component } from  'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarText,
    Collapse,
    NavbarToggler
} from 'reactstrap';

export class NavigationBar extends Component<{}, {open: boolean}> {

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            open: false
        }
    }

    private toggle = () => {
        let isOpen = !this.state.open;
        this.setState({open: isOpen});
    }
    
    render() {
        return (
            <Navbar color="dark" dark fixed="top" expand="md">
                <NavbarBrand className="navigation-text" onClick={() => document.getElementById('information')?.scrollIntoView({behavior: 'smooth'})}>Shaurya Madan</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.open} navbar>
                    <Nav className="mr-auto" navbar></Nav>
                    <Nav navbar>
                        <NavbarText className="navigation-text" onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})}>
                            Work
                        </NavbarText>
                        <div className="mx-2"></div>
                        <NavbarText className="navigation-text" onClick={() => document.getElementById('projects-education')?.scrollIntoView({behavior: 'smooth'})}>
                            Projects/Education
                        </NavbarText>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    };
}
