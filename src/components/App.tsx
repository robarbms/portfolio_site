import React from 'react'
import Header from './Home/Header'
import Home from './Home/Home'
import WorkExperience from './Experience/Experience'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import NavList from '../data/NavList'
import ProjectList from '../data/ProjectList'
import CodeSiteList from '../data/CodeSiteList'
import JobList from '../data/JobList'
import MoreContactList from '../data/MoreContactList'
import '../styles/site.css'


/**
 * Renders the basic shell for the site.
 * @returns App component
 */
export default function App () {
    return (
        <div className="page">
            <Header navItems={NavList}></Header>
            <Home></Home>
            <Projects projects={ProjectList} codesites={CodeSiteList}></Projects>
            <WorkExperience jobs={JobList}></WorkExperience>
            <Contact contacts={MoreContactList}></Contact>
            <Footer></Footer>
        </div>
    );
}
