import React from 'react';
import styles from '../styles/home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: true
        }
    }

    render() {
        return(
            <div className={`${this.state.animate ? 'animate' : ''} home`}>
                <div className="home-background"></div>
                <h1><span>Hello</span><span className="load-in">, I'm <span className="name">Rob Barber</span></span></h1>
                <span className="dev">a full stack developer</span>
                <div>
                    <a href="#contact" className="call-to-action button no-hover">
                        <span>Contact me</span>
                    </a>
                </div>
                <a href="#projects" title="scroll to see more" className="scroll no-hover">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </a>
            </div>
        )
    }

    componentDidMount() {
        /* Don't animate if the component re-renders */
        if (window.sessionStorage.getItem("firstLoadDone") === null) {
            this.setState({
                animate: true
            });
        }
        else {
            this.setState({
                animate: false
            });
        }
    }
}
