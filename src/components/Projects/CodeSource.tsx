import React from 'react'

export type CodeSourceProps = {
    title: string,
    link: string,
    icon?: string
}

/**
 * Component for rendering code icon
 */
export default function CodeSource (props: CodeSourceProps) {
    const {title, link, icon} = props;
    return(
        <a className="code_source" href={link} target="_blank" title={title}>
            <i className={icon || `devicon-${title.toLowerCase()}-plain`}></i> <span>{title}</span>
        </a>
    )
}
