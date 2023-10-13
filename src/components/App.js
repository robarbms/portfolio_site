import React from 'react'
import Header from './Home/Header'
import Home from './Home/Home'
import WorkExperience from './Experience/Experience'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

/**
 * Renders the basic shell for the site.
 * @returns App component
 */
export default function App () {
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
        }
    ];

    return (
        <div class="page">
            <Header navItems={navItems}></Header>
            <Home></Home>
            <Projects></Projects>
            <WorkExperience></WorkExperience>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}
