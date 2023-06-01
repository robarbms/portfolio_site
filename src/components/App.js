import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Home from './Home';
import WorkExperience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const App = ({ /* Add any props needed from Redux state */ }) => {
    const navItems = [
        {
            link: "#",
            text: "Home"
        },
        {
            link: "#projects",
            text: "Projects"
        },
        {
            link: "#experience",
            text: "Experience"
        },
        {
            link: "#contact",
            text: "Contact"
        },
        {
            link: "#resume",
            text: "Resume"
        }
    ];
  return (<div class="page">
        <Header navItems={navItems}></Header>
        <Home></Home>
        <Projects></Projects>
        <WorkExperience></WorkExperience>
        <Contact></Contact>
        <Footer></Footer>
    </div>);
};

// Map state from the Redux store to component props
const mapStateToProps = (state) => {
  return {
    // Map the required state properties here
  };
};

export default connect(mapStateToProps)(App);
