import React from  'react';
import { 
    Row, 
    Col, 
    Container
} from 'reactstrap';

export function ExperienceSection() {
    return (
        <Container fluid className="experience-container" id="experience">
            <div className="section-title">
                <h1>My Work Experience</h1>
            </div>
            <div className="experiences">
                <Row className="experience-row align-items-center">
                    <Col lg="4">
                        <div className="image-container">
                            <img src={require('../assets/images/SSC-logo.png')} alt="SS&C Logo"></img>
                        </div>
                    </Col>
                    <Col lg="8">
                        <h2 className="employer-name">SS&C Technologies</h2>
                        <h5 className="position-and-time">Fullstack Developer | January - May 2020</h5>
                        <p>
                            I used Django to maintain and update web pages and transactions for the Avenza MapStore, in addition to creating and updating models
                            for the MapStore’s PostgreSQL database with the Django Queryset API. I also created a tool to extract GIS metadata from maps using
                            the GDAL C++ library, and another one to populate test databases which streamlined unit testing and development. The web site was
                            deployed with Heroku, and development was done on VMs built with Vagrant.
                        </p>
                    </Col>
                </Row>
                <Row className="experience-row align-items-center">
                    <Col lg="4">
                        <div className="image-container">
                            <img src={require('../assets/images/avenza-logo.png')} alt="Avenza Logo"></img>
                        </div>
                    </Col>
                    <Col lg="8">
                        <h2 className="employer-name">Avenza Systems Inc</h2>
                        <h5 className="position-and-time">Software Developer (Python) | May - August 2019</h5>
                        <p>
                            I used Django to maintain and update web pages and transactions for the Avenza MapStore, in addition to creating and updating models
                            for the MapStore’s PostgreSQL database with the Django Queryset API. I also created a tool to extract GIS metadata from maps using
                            the GDAL C++ library, and another one to populate test databases which streamlined unit testing and development. The web site was
                            deployed with Heroku, and development was done on VMs built with Vagrant.
                        </p>
                    </Col>
                </Row>
                <Row className="experience-row align-items-center">
                    <Col lg="4">
                        <div className="image-container">
                            <img src={require('../assets/images/open-text-logo.png')} alt="Open Text Logo"></img>
                        </div>
                    </Col>
                    <Col lg="8">
                        <h2 className="employer-name">Open Text Corporation</h2>
                        <h5 className="position-and-time">Software Developer, Extream Product | September - December 2018</h5>
                        <p>
                            I expanded the Exstream PYFT framework built on top of pywinauto, and used it to develop Python scripts that automated regression testing
                            of the OpenText Exstream software suite. I wrote many unit tests for my code that extensively used Python’s built-in testing frameworks,
                            and added all this to the OpenText codebase using Subversion.
                        </p>
                    </Col>
                </Row>
                <Row className="experience-row align-items-center">
                    <Col lg="4">
                        <div className="image-container">
                            <img src={require('../assets/images/evertz-logo.png')} alt="Evertz Logo"></img>
                        </div>
                    </Col>
                    <Col lg="8">
                        <h2 className="employer-name">Evertz Microsystems Ltd</h2>
                        <h5 className="position-and-time">Product Verification Specialist | January - April 2018</h5>
                        <p>
                            I developed a Python tool to create artificial latency in a network by delaying data packets sent to an ethernet port or IP address,
                            used for performance testing and real-world simulations, in addition to my regular responsibilities of testing bugs and performance
                            issues on current and upcoming builds of the Evertz DreamCatcher system.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
  );
};
