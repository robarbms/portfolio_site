import React from 'react'

/**
 * Component for rendering code icon
 */
export default function CodeSource (props) {
    const {title, link, icon} = props;
    return(
        <a className="code_source" href={link} target="_blank" title={title}>
            <i className={icon || `devicon-${title.toLowerCase()}-plain`}></i> <span>{title}</span>
        </a>
    )
}
