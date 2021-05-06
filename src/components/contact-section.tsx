import React from  'react';
import { Container } from 'reactstrap';

export function ContactSection() {
    return (
        <Container fluid className="contact-container" id="about">
            <a target="_blank" href="https://github.com/ShauryaMdn" rel="noopener noreferrer" className="github-logo">
                <img className="github-logo" src={require('../assets/images/github-logo.svg')} alt="GitHub Logo"></img>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/shaurya-madan-165315194/" rel="noopener noreferrer" className="linkedin-logo">
                <img className="linkedin-logo" src={require('../assets/images/linkedin-logo.svg')} alt="LinkedIn Logo"></img>
            </a>
            <a target="_blank" href={require('../assets/files/resume.pdf')} rel="noopener noreferrer" className="pdf-logo">
                <img src={require('../assets/images/pdf-logo.svg')} alt="PDF Logo"></img>
            </a>
            <a href="mailto:s4madan@uwaterloo.ca" className="mail-logo">
                <img src={require('../assets/images/mail-logo.svg')} alt="Mail Logo"></img>
            </a>
        </Container>
    )
}
