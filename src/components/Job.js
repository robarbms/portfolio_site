import React from 'react'

/**
 * Rendering for a Job experience item
 * @param {*} props 
 * @returns Job component
 */
export default function Job ({title, company, startDate, endDate, work, tech}) {
    return (
        <div className="job">
            <div className="date-end">{endDate}</div>
            <div className="job-content">
                <h3>{company}</h3>
                <div className="meta_data">{title}</div>
                <ul className="jobs">
                    {work.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <ul className="job-tech">
                    {tech.map((item, index) => <li><i title={item.title} key={index} className={item.icon ? item.icon : `devicon-${item.title.toLowerCase()}-plain`}></i></li>)}
                </ul>
            </div>
        </div>
    )
}
