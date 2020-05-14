import React from  'react';
import { 
    Row, 
    Col, 
    Container
} from 'reactstrap';

const items = [
    {
        src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 900\'%3E%3Cpolygon fill=\'%23cc0000\' points=\'957 450 539 900 1396 900\'/%3E%3Cpolygon fill=\'%23aa0000\' points=\'957 450 872.9 900 1396 900\'/%3E%3Cpolygon fill=\'%23d6002b\' points=\'-60 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23b10022\' points=\'337 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23d9004b\' points=\'1203 546 1552 900 876 900\'/%3E%3Cpolygon fill=\'%23b2003d\' points=\'1203 546 1552 900 1162 900\'/%3E%3Cpolygon fill=\'%23d3006c\' points=\'641 695 886 900 367 900\'/%3E%3Cpolygon fill=\'%23ac0057\' points=\'587 900 641 695 886 900\'/%3E%3Cpolygon fill=\'%23c4008c\' points=\'1710 900 1401 632 1096 900\'/%3E%3Cpolygon fill=\'%239e0071\' points=\'1710 900 1401 632 1365 900\'/%3E%3Cpolygon fill=\'%23aa00aa\' points=\'1210 900 971 687 725 900\'/%3E%3Cpolygon fill=\'%23880088\' points=\'943 900 1210 900 971 687\'/%3E%3C/svg%3E',
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header',
         key: '1'
    },
    {
        src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 900\'%3E%3Cpolygon fill=\'%23cc0000\' points=\'957 450 539 900 1396 900\'/%3E%3Cpolygon fill=\'%23aa0000\' points=\'957 450 872.9 900 1396 900\'/%3E%3Cpolygon fill=\'%23d6002b\' points=\'-60 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23b10022\' points=\'337 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23d9004b\' points=\'1203 546 1552 900 876 900\'/%3E%3Cpolygon fill=\'%23b2003d\' points=\'1203 546 1552 900 1162 900\'/%3E%3Cpolygon fill=\'%23d3006c\' points=\'641 695 886 900 367 900\'/%3E%3Cpolygon fill=\'%23ac0057\' points=\'587 900 641 695 886 900\'/%3E%3Cpolygon fill=\'%23c4008c\' points=\'1710 900 1401 632 1096 900\'/%3E%3Cpolygon fill=\'%239e0071\' points=\'1710 900 1401 632 1365 900\'/%3E%3Cpolygon fill=\'%23aa00aa\' points=\'1210 900 971 687 725 900\'/%3E%3Cpolygon fill=\'%23880088\' points=\'943 900 1210 900 971 687\'/%3E%3C/svg%3E',
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header',
        key: '2'
    },
    {
        src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 900\'%3E%3Cpolygon fill=\'%23cc0000\' points=\'957 450 539 900 1396 900\'/%3E%3Cpolygon fill=\'%23aa0000\' points=\'957 450 872.9 900 1396 900\'/%3E%3Cpolygon fill=\'%23d6002b\' points=\'-60 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23b10022\' points=\'337 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23d9004b\' points=\'1203 546 1552 900 876 900\'/%3E%3Cpolygon fill=\'%23b2003d\' points=\'1203 546 1552 900 1162 900\'/%3E%3Cpolygon fill=\'%23d3006c\' points=\'641 695 886 900 367 900\'/%3E%3Cpolygon fill=\'%23ac0057\' points=\'587 900 641 695 886 900\'/%3E%3Cpolygon fill=\'%23c4008c\' points=\'1710 900 1401 632 1096 900\'/%3E%3Cpolygon fill=\'%239e0071\' points=\'1710 900 1401 632 1365 900\'/%3E%3Cpolygon fill=\'%23aa00aa\' points=\'1210 900 971 687 725 900\'/%3E%3Cpolygon fill=\'%23880088\' points=\'943 900 1210 900 971 687\'/%3E%3C/svg%3E',
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3'
    }
  ];

export function ExperienceCards() {
    return (
        <Container fluid className="experience-container" id="experience">
            <div className="experience-title">
                <h1>My Experiences</h1>
            </div>
            <div className="experiences">
                <Row className="experience-row">
                    <Col lg="4">
                        <div className="image-container">
                            <img src={require('../assets/images/SSC-logo.jpg')}></img>
                        </div>
                    </Col>
                    <Col lg="8">
                        <h2 className="employer-name">SS&C Technologies</h2>
                        <h5 className="position-and-time">Fullstack Developer | January - May 2020</h5>
                    </Col>
                </Row>
                <Row className="experience-row">
                    <Col lg="4">
                        <div className="image-container">
                            <img src={require('../assets/images/avenza-logo.png')}></img>
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
                <Row className="experience-row">
                    <Col lg="4">
                        <div className="image-container">
                            <img src={require('../assets/images/open-text-logo.png')}></img>
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
                <Row className="experience-row">
                    <Col lg="4">
                        <div className="image-container">
                            <img src={require('../assets/images/evertz-logo.png')}></img>
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
            {/* <div className="experience">
                <Row>
                    <CardDeck>
                        <Col>
                            <Card className="experience-card">
                                <CardHeader>
                                    <h5>Fullstack Developer</h5>
                                    <p className="employer-text">SS&C Technologies</p>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>January - May 2020</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="experience-card">
                                <CardHeader>
                                    <h5>Software Developer (Python)</h5>
                                    <p className="employer-text">Avenza Systems Inc</p>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>May - August 2019</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="experience-card">
                                <CardHeader>
                                    <h5>Software Developer, Exstream Product</h5>
                                    <p className="employer-text">Open Text Corporation</p>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>September - December 2018</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="experience-card">
                                <CardHeader>
                                    <h5>Product Verification Specialist</h5>
                                    <p className="employer-text">Evertz Microsystems Ltd</p>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>January - April 2018</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </CardDeck>
                </Row>
            </div> */}
        </Container>
  );
};
