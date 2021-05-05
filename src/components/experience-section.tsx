import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";

import ssnc_logo from '../assets/images/SSC-logo.png';
import avenza_logo from '../assets/images/avenza-logo.png';
import opentext_logo from '../assets/images/open-text-logo.png';
import evertz_logo from '../assets/images/evertz-logo.png';
import {Experience} from "../interfaces";

const experience: Experience[] = [
    {
        employer: 'SS&C Technologies',
        logo: ssnc_logo,
        title: 'Fullstack Developer',
        time: 'January - April 2020',
        description: [
            'I engineered the search functionality for the new SS&C KnowledgeBase, implementing it end-to-end with Angular, Spring Boot, and PostgreSQL\'s ' +
            'tsvector tool. It was designed to be fast, meet client reliability standards, and customized to work with terminology used in mutual fund ' +
            'management through the use of database dictionaries.',
            'I designed the workflow process that would be used by site admins to handle recommendations and create and edit documents, with several built-in ' +
            'checkpoints to ensure that only high quality documents made it through review. I developed the REST APIs and UI to support this process with ' +
            'Spring Boot and Angular, respectively.',
            'I was involved in the design and creation of several pages on the KnowledgeBase that were critical to its core functionality, done with Angular ' +
            'and Angular Material.',
            'I collaborated with team members to architect a database schema for search and the recommendation workflow.',
            'I implemented a client-side authorization framework to ensure confidential documents could only be viewed by those with appropriate permissions.'
        ]
    },
    {
        employer: 'Avenza Systems',
        logo: avenza_logo,
        title: 'Software Developer (Python)',
        time: 'May - August 2019',
        description: [
            'I developed an algorithm with Django\'s QuerySet API that would populate test databases according to to business logic, with minimal additional ' +
            'configuration, thereby reducing the time spent on writing test fixtures for unit tests and allowing developers to focus on creating new features.',
            'I created a tool using the GDAL C++ library that would extract GIS metadata from maps on the Avenza MapStore and compute values such as area and ' +
            'map resolution, which would then be used for categorizing and filtering products in the database.',
            'I enhanced an existing status monitoring program to be more granular, allowing site admins to quickly perform root cause analysis during system ' +
            'outages.',
            'I implemented new features and fixed various bugs on the MapStore, improving user experience.'
        ]
    },
    {
        employer: 'OpenText Corporation',
        logo: opentext_logo,
        title: 'Software Developer, Extream Product',
        time: 'September - December 2018',
        description: [
            'I expanded the OpenText PyFT framework built on top of pywinauto, improving the breadth and quality of regression tests that could be made with ' +
            'it. I used PyFT to automate over 200 manual regression tests, accelerating the rate at which new builds of the Exstream product suite could be ' +
            'verified. I also improved existing regression tests to make them run as much as 5x as fast while maintaining a 100% success rate for detecting bugs.'
        ]
    },
    {
        employer: 'Evertz Microsystems',
        logo: evertz_logo,
        title: 'Product Verification Specialist',
        time: 'January - April 2018',
        description: [
            'I developed a Python tool to create artificial latency in a network by delaying data packets sent to an ethernet port or IP address, ' +
            'used for performance testing and real-world simulations, in addition to my regular responsibilities of testing bugs and performance ' +
            'issues on current and upcoming builds of the Evertz DreamCatcher system.'
        ]
    }
]

export class ExperienceSection extends Component<{}, {index: number}> {
    private readonly numElements = experience.length + 1;

    constructor(props: {}) {
        super(props);
        this.state = {
            index: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollEvent);
    }

    scrollEvent = () => {
        const scrollTop = document.documentElement.scrollTop;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const index = Math.min(
            this.numElements - 1,
            Math.floor(scrollFraction * this.numElements)
        );
        this.setState({index: index - 1});
    }

    render() {
        return (
            <Container fluid className="experience-container" id="experience" style={{height: `${(experience.length + 1)*100}vh`}}>
                <div className={`section-title section-title-sticky ${this.state.index < 0 ? '' : 'hidden'}`}>
                    <h1>My Work Experience</h1>
                </div>
                {experience.map((job, key) => {
                    return (
                        <div key={key} className={`experience-sticky ${this.state.index === key ? '' : 'hidden'}`}>
                            <div className="experiences">
                                <Row className="experience-row align-items-center">
                                    <Col lg="4">
                                        <div className="image-container">
                                            <img src={job.logo} alt="Logo"/>
                                        </div>
                                    </Col>
                                    <Col lg="8">
                                        <h2 className="employer-name">{job.employer}</h2>
                                        <h5 className="position-and-time">{job.title} | {job.time}</h5>
                                        {job.description.map((description: string, index: number) => {
                                            return (
                                                <p key={index}>{description}</p>
                                            )
                                        })}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    )
                })}
            </Container>
        )
    }
}
