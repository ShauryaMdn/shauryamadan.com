import React from  'react';
import { Container, Col, Row } from 'reactstrap';
import { ProjectSlider } from './project-slider';

export function ProjectsSection() {
    return (
        <Container fluid className ="projects-container">
            <Row className="container-fluid projects">
                <Col lg="6" className="projects-section-title-outer">
                    <div className="projects-section-title">
                        <Row tag="h1">My</Row>
                        <Row tag="h1">Projects</Row>
                    </div>
                </Col>
                <Col lg="6">
                    <ProjectSlider></ProjectSlider>
                </Col>
            </Row>
        </Container>
    );
}