import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import styles from '../styles/Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <header>
            <div className="center">
                <a href="#"><Logo /></a>
                <Navigation navItems={this.props.navItems} />
            </div>
        </header>
        );
    }
}
