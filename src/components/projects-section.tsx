import React from  'react';
import { Container, Col, Row } from 'reactstrap';
import { ProjectSlider } from './project-slider';

export function ProjectsSection() {
    return (
        <Container fluid className ="projects-container">
            <div className="section-title">
                <h1>My Projects</h1>
            </div>
            <ProjectSlider></ProjectSlider>
        </Container>
    );
}