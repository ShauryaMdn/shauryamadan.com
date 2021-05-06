import React, { Component } from  'react';
import { SliderProps, SliderState, SlideProps } from '../interfaces';

function Slide(props: SlideProps) {
    let icons;
    if (props.item.icons) {
        icons = (
            <div className="icon-row">
                {props.item.icons.map((icon, index) => {
                    return (
                        <a target="_blank" href={icon.iconLink} rel="noopener noreferrer" key={index}>
                            <img src={icon.iconSrc} alt=""></img>
                        </a>
                    )
                })}
            </div>
        )
    }

    return (
        <div className={`slide ${props.className}`}>
            <div className="arrow-container left" onClick={() => props.moveFunction('left')}>
                <img className="arrow-icon" src={require('../assets/images/arrow-left.svg')} alt="left-arrow"></img>
            </div>
            <div className="slider-content">
                <h1>{props.item.title}</h1>
                <div className="my-2"></div>
                <p>{props.item.description}</p>
                {icons}
            </div>
            <div className="arrow-container right" onClick={() => props.moveFunction('right')}>
                <img className="arrow-icon" src={require('../assets/images/arrow-right.svg')} alt="right-arrow"></img>
            </div>
        </div>
    )
}

export class Slider extends Component<SliderProps, SliderState> {

    constructor(props: Readonly<SliderProps>) {
        super(props);
        this.state = {
            currentIndex: 0,
            items: this.props.items,
            itemsLength: this.props.items.length
        };
    }

    clickArrow = (direction: string) => {
        const length = this.state.itemsLength;
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
            <div className="slider-container">
                {this.props.items.map((value, index) => {
                    return <Slide key={index} item={value} moveFunction={this.clickArrow} className={this.state.currentIndex === index ? '' : 'inactive'}/>;
                })}
            </div>
        );
    }
} 
