import React from  'react';

import './component-styles.scss'
import { Row, Container } from 'reactstrap';

export function ShauryaInformation() {
    return (
        <Container fluid className="info-container">
            <div className="name-container">
                <Row className="justify-content-center name">Shaurya</Row>
                <Row className="justify-content-center name">Madan</Row>
            </div>
            <Row className="justify-content-center description">3A Waterloo Computer Engineering Student</Row>
        </Container>
    );
}
