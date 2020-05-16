import React from  'react';
import { Container, Col, Row } from 'reactstrap';
import { Slider } from './slider';
import { SliderItems } from '../interfaces';

const projects: SliderItems[] = [
    {
        title: 'Personal Site',
        description: 'That\'s this website! I use this site to display my experience in web development, and plan to keep on updating it as I improve my skills. ' +
        'I made it using a React and the reactstrap library from npm, which bind\'s React components to Bootstrap CSS. It\'s deployed using AWS Amplify.',
        icons: [
            {
                iconSrc: require('../assets/images/github-logo.svg'),
                iconLink: 'https://github.com/ShauryaMdn/shauryamadan.com'
            }
        ]
    },
    {
        title: 'Coup Online',
        description: 'I used to play a card game called coup at my SS&C co-op until the COVID-19 lockdown. I wanted to continue playing, so I\'ve started making ' +
        'an online version of this game, with a front end made with Angular, and the backend coded in Spring Boot. Players communicate with the server and each ' +
        'other using the Simple Text Oriented Message Protocol (STOMP) and a WebSocket message broker.',
        icons: [
            {
                iconSrc: require('../assets/images/github-logo.svg'),
                iconLink: 'https://github.com/ShauryaMdn/CoupOnlineFrontend'
            },
            {
                iconSrc: require('../assets/images/github-logo.svg'),
                iconLink: 'https://github.com/ShauryaMdn/CoupOnlineBackend'
            }
        ]
    },
    {
        title: 'Ocra',
        description: 'At Hack The 6ix 2019, I ventured into Android development for the first time and started an app that would let users scan a price tag to see ' +
        'if they could get the same product for cheaper at a different store. When scanned, the images would be uploaded to an S3 bucket, which would trigger ' +
        'an AWS Lambda function that would call Amazon\'s Textract service for OCR. The results returned from Textract would then be used by scrapers running on an EC2 ' +
        'instance to find similar products on some retailer websites.',
        icons: [
            {
                iconSrc: require('../assets/images/github-logo.svg'),
                iconLink: 'https://github.com/ShauryaMdn/Ocra'
            }
        ]
    }
];

const education: SliderItems[] = [
    {
        title: 'University of Waterloo',
        description: 'Candidate for Bachelor of Applied Science, Computer Engineering at the University of Waterloo, with an expected graduation in April 2022. Relevant ' +
        'coursework includes a Data Structures and Algorithms course with C++, Linux Systems Programming in C, a course to make a VHDL compiler using Java, several ' +
        'digital circuits and hardware courses, as well as many linear algebra, calculus, and statistics courses. Consistent 80+ average each term.'
    },
    {
        title: 'Stanford University Machine Learning Course',
        description: 'Taken from January to April 2020, I took this course on Coursera, taught by Andrew Ng. I learned a wide variety of topics in Machine Learning, ' +
        'including supervised learning algorithms like linear and logistical regression, neural networks, and large margin classifiers and SVMs, as well as unsupervised ' +
        'learning algorithms like K-Means, principal component analysis, and anomaly detection. I also studied concepts like regularization, bias and variance, precision ' +
        'recall, and Gaussian kernels. I used MATLAB to implement these algorithms to make things such as a OCR program and a movie recommender.'
    },
    {
        title: 'IB Diploma Programme',
        description: 'Graduated in May 2017 with a points total of 37, taking courses in English, Math, Chemistry, Biology, History, and French.'
    }
]

export function ProjectsAndEducationSection() {
    return (
        <Container fluid className ="projects-education-container" id="projects-education">
            <div className="section-title">
                <h1>Projects & Education</h1>
            </div>
            <Container fluid>
                <Row className="projects-education-row">
                    <Col lg="6" className="projects-education-column">
                        <h1 className="column-title">Personal Work</h1>
                        <Slider items={projects}></Slider>
                    </Col>
                    <Col lg="6" className="projects-education-column">
                        <h1 className="column-title">Learning</h1>
                        <Slider items={education}></Slider>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}