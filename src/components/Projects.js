import React from 'react'
import styles from '../styles/projects.css'
import Project from "./Project"
import CodeSource from "./CodeSource"
import ProjectList from "./ProjectList"

const code = [
    {
        title: "GitHub",
        link: "https://github.com/robarbms"
    },
    {
        title: "CodePen",
        link: "https://codepen.io/kungfukarl"
    },
    {
        title: "NPM",
        icon: "devicon-npm-original-wordmark",
        link: "https://www.npmjs.com/~robarbms"
    }
]

export default function Projects (props) {
    return(
        <section className="projects">
            <div className="center">
                <a name="projects" className="jump-to"></a>
                <h2>Projects</h2>
                <p className="description">My most recent professional work was done for Microsoft for the Edge Browser and Windows 11, so the source code is not available for viewing. I included links to my prototypes to support the features that I built. I did include links to source code I wrote for the Microsoft open source libraries.</p>
                <p className="description">If you have any questions about my work, please feel free to <a href="#contact">contact me</a>.</p>
                <div className="projects-container">
                    {ProjectList.map((project, index) => {
                        return (
                            <Project key={index} title={project.title} tech={project.tech} images={project.images} description_short={project.description_short} links={project.links} description={project.description} />
                        )
                    })}
                </div>
                <h2>More work that I've done</h2>
                <div className="more_work">
                    {code.map(({title, link, icon}, index) => <CodeSource key={index} title={title} link={link} icon={icon} />)}
                </div>
            </div>
        </section>
    )
}
