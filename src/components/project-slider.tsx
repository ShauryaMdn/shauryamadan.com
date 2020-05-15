import React, { Component } from  'react';
import { Container, Col, Row } from 'reactstrap';

interface SliderProps {};

interface SliderState {
    currentIndex: number;
    projectsLength: number;
};

function Slide(props: any) {
    return (
        <div className={props.className}>
            <img className="arrow-icon left" src={require('../assets/images/arrow-left.svg')} onClick={() => props.arrowFunction('left')}></img>
            <div className="slider-content">
                <h1>{props.project.title}</h1>
                <div className="my-2"></div>
                <p>{props.project.description}</p>
            </div>
            <img className="arrow-icon right" src={require('../assets/images/arrow-right.svg')} onClick={() => props.arrowFunction('right')}></img>
        </div>
    )
}

export class ProjectSlider extends Component<SliderProps, SliderState> {

    private projects: {title: string, description: string}[] = [
        {
            title: 'shauryamadan.com',
            description: 'That\'s this site! I use this site to display my experience in web development, and plan to keep on updating it as I improve my skills. ' +
            'I made it using a React and the reactstrap library from npm, which bind\'s React components to Bootstrap CSS. It\'s deployed using AWS Amplify.'
        },
        {
            title: 'Coup Online',
            description: 'I used to play a card game called coup at my SS&C co-op until the COVID-19 lockdown. I wanted to continue playing, so I\'ve started making ' +
            'an online version of this game, with a front end made with Angular, and the backend coded in Spring Boot. Players communicate with the server and each ' +
            'other using the Simple Text Oriented Message Protocol (STOMP) and a WebSocket message broker.'
        },
        {
            title: 'Ocra',
            description: 'At Hack The 6ix 2019, I ventured into Android development for the first time and started an app that would let users scan a price tag to see ' +
            'if they could get the same product for cheaper at a different store. When scanned, the images would be uploaded to an S3 bucket, which would trigger ' +
            'an AWS Lambda function that would call Amazon\'s Textract service for OCR. The results returned from Textract would then be used by scrapers running on an EC2 ' +
            'instance to find similar products on some retailer websites.'
        }
    ];

    constructor(props: Readonly<SliderProps>) {
        super(props);
        this.state = {
            currentIndex: 0,
            projectsLength: this.projects.length
        };
    }

    clickArrow = (direction: string) => {
        const length = this.state.projectsLength;
        let currIndex = this.state.currentIndex;
        if (direction === 'left') {
            if (currIndex === 0) {
                currIndex = length - 1;
            }
            else {
                currIndex--;
            }
        }
        else if (direction === 'right') {
            if (currIndex === length - 1) {
                currIndex = 0;
            }
            else {
                currIndex++;
            }
        }
        this.setState({currentIndex: currIndex});
    };

    render() {
        return (
            <Container fluid="lg">
                <Row>
                    <Col lg="2"></Col>
                    <Col lg="8">
                        <div className="slider-container">
                            {this.projects.map((value, index) => {
                                return <Slide key={index} project={value} arrowFunction={this.clickArrow} className={this.state.currentIndex === index ? 'active' : 'inactive'}/>;
                            })}
                        </div>
                    </Col>
                    <Col lg="2"></Col>
                </Row>
            </Container>
        );
    }
} 
