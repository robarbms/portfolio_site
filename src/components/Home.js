import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/home.css';

class Home extends React.Component {
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
                    <a href="#contact" className="call-to-action button">
                        <span>Contact me</span>
                    </a>
                </div>
                <div className="scroll">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
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

// Map state from the Redux store to component props
const mapStateToProps = (state) => {
    return {
      // Map the required state properties here
    };
  };
  
  export default connect(mapStateToProps)(Home);
  