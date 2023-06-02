import React from 'react';
import Header from './Header';
import Home from './Home';
import WorkExperience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.navItems = [
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
            }
        ];
    
    }

    render() {
        return (<div class="page">
            <Header navItems={this.navItems}></Header>
            <Home></Home>
            <Projects></Projects>
            <WorkExperience></WorkExperience>
            <Contact></Contact>
            <Footer></Footer>
        </div>);
    }
}
