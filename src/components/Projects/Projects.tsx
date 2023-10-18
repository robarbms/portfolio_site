import React from 'react'
import Project from "./Project"
import CodeSource from './CodeSource'
import { ProjectAttr } from '../../data/ProjectList'
import { CodeSiteAttr } from '../../data/CodeSiteList'
import '../../styles/projects.css'

/**
 * A component showing past projects and links to github, codepen, npm, etc.
 * @param {projects, codesites} - A list of projects and sites with examples
 * @returns Projects component
 */
export default function Projects ({projects, codesites}: {projects: ProjectAttr[], codesites: CodeSiteAttr[]}): React.JSX.Element {
    return(
        <section className="projects">
            <div className="center">
                <a id="projects" className="jump-to"></a>
                <h2>Projects</h2>
                <p className="description">My most recent professional work was done for Microsoft for the Edge Browser and Windows 11, so the source code is not available for viewing. I included links to my prototypes to support the features that I built. I did include links to source code I wrote for the Microsoft open source libraries.</p>
                <p className="description">If you have any questions about my work, please feel free to <a href="#contact">contact me</a>.</p>
                <div className="projects-container">
                    {projects.map((project: ProjectAttr, index: number): React.JSX.Element => {
                        return (
                            <Project key={index} {...project} />
                        )
                    })}
                </div>
                <h2>More work that I've done</h2>
                <div className="more_work">
                    {codesites.map((code_site: CodeSiteAttr, index: number): React.JSX.Element => <CodeSource key={index} {...code_site} />)}
                </div>
            </div>
        </section>
    )
}
