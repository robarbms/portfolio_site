import React from 'react';
import { connect } from 'react-redux';

class NavItem extends React.Component {
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

class Navigation extends React.Component {
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
                </ul>
            </nav>
        );
    }
}

// Map state from the Redux store to component props
const mapStateToProps = (state) => {
  return {
    // Map the required state properties here
  };
};

export default connect(mapStateToProps)(Navigation);
