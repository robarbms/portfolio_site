import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer>
                <div className="center">
                    
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
  