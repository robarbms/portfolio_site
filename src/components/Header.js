import React from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';
import Navigation from './Navigation';
import styles from '../styles/Header.css';

class Header extends React.Component {
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

// Map state from the Redux store to component props
const mapStateToProps = (state) => {
  return {
    // Map the required state properties here
  };
};

export default connect(mapStateToProps)(Header);
