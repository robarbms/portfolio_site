import React from 'react';
import resume from '../static/Rob Barber.pdf';

export class NavItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href={this.props.link}>{this.props.text}</a>
            </li>
        );
    }
}

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <ul>
                {
                    this.props.navItems.map((navItem, index) => <NavItem key={index} link={navItem.link} text={navItem.text} />)
                }
                <li className="nav-item">
                    <a className="nav-link" href={resume} target="_blank">Resume</a>
                </li>
                </ul>
            </nav>
        );
    }
}
