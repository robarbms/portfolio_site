import React from 'react'
import { CodeSiteAttr } from '../../data/CodeSiteList'

/**
 * Renders links to a list of sites that I contribute to
 * @param props {title, link, icon?}
 * @returns CodeSource component
 */
export default function CodeSource (props: CodeSiteAttr): React.JSX.Element {
    const {title, link, icon}: CodeSiteAttr = props;
    return(
        <a className="code_source" href={link} target="_blank" title={title}>
            <i className={icon || `devicon-${title.toLowerCase()}-plain`}></i> <span>{title}</span>
        </a>
    )
}
