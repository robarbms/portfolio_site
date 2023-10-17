import React, { useEffect, useRef } from 'react'
import resume from '../../assets/Rob Barber.pdf'
import {JobListing} from '../../data/JobList'
import Job from './Job'
import '../../styles/experience.css'

/**
 * Rendering of all of my work experience
 * @param {*} props 
 * @returns Work Experience component
 */
export default function WorkExperience ({jobs}: {jobs: JobListing[]}) {
    const exp_container = useRef(null);

    /**
     * Triggers animation of the work experience when scrolled into view
     */
    const animateExp = () => {
        const container: HTMLDivElement | null = exp_container.current;
        if (container !== null) {
            const scrollTop = (container as HTMLDivElement).getBoundingClientRect().top;
            if(scrollTop < window.innerHeight / 2) {
                (container as HTMLDivElement).classList.add('animate');
            }
        }
    }

    /**
     * Wire up animation on component mount
     */
    useEffect(() => {
        window.addEventListener("scroll", animateExp);

        return () => window.removeEventListener("scroll", animateExp);
    }, []);

    return(
        <section className="experience" ref={exp_container}>
            <div className="center">
                <a id="experience" className="jump-to"></a>
                <h2>Work Experience</h2>
                <p className="description">Most of my career has been with Microsoft. I've worked as product designer, frontend devloper, a prototyper and a software developer engineer. I've worked on several projects in a lot of different technologies. Though, my expertise is in frontend development, I've built projects in a lot of other languages such as C++, C#, PHP, Go Lang and Python.</p>
                <div className="work_area">
                    <div className="timeline">
                    </div>
                    {jobs.map((job, index) => <Job key={index} {...job} />)}
                    <div className="date-end start">Sep 2002</div>
                </div>
                <h2 className="cert_header">Certificates</h2>
                <p className="description">Currently, I've been working on studying machine learning. I'm working my way through certifications for AWS, Python and TensorFlow. I have some experience building models for regression problems, image classification, natural language processing, and time series forecasting.</p>
                <ul className="certification_list">
                    <li>
                        <a className="certification" href="https://www.credly.com/badges/6854c175-0057-459b-b55a-e8b5e0427a00/linked_in_profile" target="_blank">AWS Certified Cloud Practioneer</a> <span className="cert_date">April 19, 2023</span>
                    </li>
                    <li>
                        <a className="certification" href="https://www.credly.com/badges/cbe085fa-4676-480b-a38b-9e6892723edd/linked_in_profile" target="_blank">[PCEP-30-02] PCEP - Certified Entry-Level Python Programmer</a> <span className="cert_date">April 26, 2023</span>
                    </li>
                </ul>
                <h2>Download</h2>
                <a className="resume_link" href={resume} target="_blank">Resume</a>
            </div>
        </section>
    )
}
