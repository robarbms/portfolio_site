import React from 'react';
import { connect } from 'react-redux';

class Projects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="projects">
                <div className="center">
                    <a name="projects" className="jump-to"></a>
                    <h2>Projects</h2>
                </div>
            </section>
        )
    }
}

// Map state from the Redux store to component props
const mapStateToProps = (state) => {
    return {
      // Map the required state properties here
    };
  };
  
  export default connect(mapStateToProps)(Projects);
  