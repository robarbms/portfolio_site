import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/footer.css';
import Logo from './Logo';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer>
                <div className="center">
                    <Logo />
                    &#169; 2023 Rob Barber
                </div>
            </footer>
        )
    }
}

// Map state from the Redux store to component props
const mapStateToProps = (state) => {
    return {
      // Map the required state properties here
    };
  };
  
  export default connect(mapStateToProps)(Footer);
  