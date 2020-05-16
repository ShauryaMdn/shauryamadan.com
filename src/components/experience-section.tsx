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
                        <h5 className="position-and-time">Fullstack Developer | January - April 2020</h5>
                        <p>
                            I engineered the search functionality for the new SS&C KnowledgeBase, implementing it end-to-end with Angular, Spring Boot, and PostgreSQL's
                            tsvector tool. It was designed to be fast, meet client reliability standards, and customized to work with terminology used in mutual fund
                            management through the use of database dictionaries.
                            <br></br>
                            <br></br>
                            I designed the workflow process that would be used by site admins to handle recommendations and create and edit documents, with several built-in
                            checkpoints to ensure that only high quality documents made it through review. I developed the REST APIs and UI to support this process with
                            Spring Boot and Angular, respectively.
                            <br></br>
                            <br></br>
                            I was involved in the design and creation of several pages on the KnowledgeBase that were critical to its core functionality, done with Angular
                            and Angular Material.
                            <br></br>
                            <br></br>
                            I collaborated with team members to architect a database schema for search and the recommendation workflow.
                            <br></br>
                            <br></br>
                            I implemented a client-side authorization framework to ensure confidential documents could only be viewed by those with appropriate permissions.
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
                            I developed an algorithm with Django's QuerySet API that would populate test databases according to to business logic, with minimal additional
                            configuration, thereby reducing the time spent on writing test fixtures for unit tests and allowing developers to focus on creating new features.
                            <br></br>
                            <br></br>
                            I created a tool using the GDAL C++ library that would extract GIS metadata from maps on the Avenza MapStore and compute values such as area and
                            map resolution, which would then be used for categorizing and filtering products in the database.
                            <br></br>
                            <br></br>
                            I enhanced an existing status monitoring program to be more granular, allowing site admins to quickly perform root cause analysis during system
                            outages.
                            <br></br>
                            <br></br>
                            I implemented new features and fixed various bugs on the MapStore, improving user experience.
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
                        <h2 className="employer-name">OpenText Corporation</h2>
                        <h5 className="position-and-time">Software Developer, Extream Product | September - December 2018</h5>
                        <p>
                            I expanded the OpenText PyFT framework built on top of pywinauto, improving the breadth and quality of regression tests that could be made with
                            it. I used PyFT to automate over 200 manual regression tests, accelerating the rate at which new builds of the Exstream product suite could be
                            verified. I also improved existing regression tests to make them run as much as 5x as fast while maintaining a 100% success rate for detecting bugs.
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
