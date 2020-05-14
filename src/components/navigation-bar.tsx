import React from  'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

export function NavigationBar() {
    return (
        <Navbar color="dark" dark fixed="top" expand="md">
            <NavbarBrand onClick={() => document.getElementById('information')?.scrollIntoView({behavior: 'smooth'})}>Shaurya Madan</NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink target="_blank" href="https://github.com/ShauryaMdn">
                        <img className="github-logo" src={require('../assets/images/github-logo.png')} alt="GitHub Logo"></img>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink target="_blank" href="https://www.linkedin.com/in/shaurya-madan-165315194/">
                        <img className="linkedin-logo" src={require('../assets/images/linkedin-logo.png')} alt="LinkedIn Logo"></img>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink target="_blank" href={'../assets/files/resume.pdf'}>Resume</NavLink>
                </NavItem>
            </Nav>
            <Nav navbar>
                <NavbarText className="navigation-text" onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})}>Experience</NavbarText>
            </Nav>
        </Navbar>
    );
}
