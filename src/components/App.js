import React from 'react'
import Header from './Header'
import Home from './Home'
import WorkExperience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

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
