import React from 'react';
import styles from '../styles/logo.css';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="logo">
                <div className="logo-border"></div>
                <span className="logo-r">R</span>
                <span className="logo-b">B</span>
            </div>
        );
    }
}
