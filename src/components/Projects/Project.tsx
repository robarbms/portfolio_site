import React from 'react'
import { ProjectAttr } from '../../data/ProjectList'

export default function Project (props: ProjectAttr) {
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
                {tech.map((t, index) => <i key={index} title={t.title} className={`devicon-${t.icon || t.title.toLowerCase()}-plain`}></i>)}
            </div>
        </div>
        <div className="proj_links">
            {links && links.map((link, index) => (<a className="proj_link" href={link.link} key={index} target="_blank">
                <span className="proj_link_text">{link.text}</span>
                <span className="proj_link_type">{link.type}</span>
            </a>))}
        </div>
    </div>
    )
}
