import React from 'react'
import { ProjectAttr } from '../../data/ProjectList'

/**
 * Creates a project tile as an overview
 * @param props - Title, text, images description, links and tech
 * @returns a Project component
 */
export default function Project (props: ProjectAttr): React.JSX.Element {
    const {title, tech, images, description_short, links} = props;
    let style = {};
    if (images && images.length > 0) {
        style = {
            backgroundImage: `url(${images[0].img})`
        }
    }
    return (
    <div className="project">
        <div className="img_wrap" style={style}>
        </div>
        <div className="proj_content">
            <h3>{title}</h3>
            <p>{description_short}</p>
            <div className="tech">
                {tech.map((t: {title: string, icon?: string}, index: number): React.JSX.Element => <i key={index} title={t.title} className={`devicon-${t.icon || t.title.toLowerCase()}-plain`}></i>)}
            </div>
        </div>
        <div className="proj_links">
            {links && links.map((link: {link: string, text: string, type: string}, index: number): React.JSX.Element => (<a className="proj_link" href={link.link} key={index} target="_blank">
                <span className="proj_link_text">{link.text}</span>
                <span className="proj_link_type">{link.type}</span>
            </a>))}
        </div>
    </div>
    );
}
