import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/experience.css';
import resume from '../static/Rob Barber Resume.pdf';

const work_data = [
    {
        startDate: 'Jun 2020',
        endDate: 'Dec 2022',
        title: 'Senior UX Engineer',
        company: 'Microsoft - Edge Experiences',
        work: [
            'Developed web components for the FAST and FluentUI open-source libraries using Git, HTML, web components, Node, TypeScript, CSS, and Jest.',
            'Ported legacy React components for FluentUI library used by Microsoft Office web apps to FAST based web components, improving performance and maintainability.',
            'Created custom web components for the Edge browser new tab page and the news feed in Windows 11.',
            'Improved accessibility through custom keyboard navigation for page components to meet WCAG 2.1 requirements.',
        ]
    },
    {
        startDate: 'Jan 2013',
        endDate: 'Jun 2020',
        title: 'Senior UX Engineer',
        company: 'Microsoft - Bing Design Prototyping',
        work: [
            'Built the News and Video feed page for the Bing Covid tracker using React, Redux and Azure DevOps.',
            'Prototyped and helped deliver features for Bing for Business site in C#, Azure DevOps, React and Redux.',
            'Built a custom Figma plugin for creating redlines from designer\'s mocks using the Figma APIs and TypeScript.',
            'Fixed UI bugs for the search experience in the Windows code base using C# and Azure DevOps.',
            'Created scripts in Go lang and C# to parse IIS server logs that were consumed by a frontend that I created in Angular.js.',
            'Developed and maintained a React and Redux based prototype of the Windows 10 search used for usability tests.',
            'Packaged the Windows prototype as an Electron Application and wrote python scripts for parsing offline content used for conference demonstrations.',
            'Built a browser plugin in C++ to collect survey questions from research participants.',
        ]
    },
    {
        startDate: 'Sep 2005',
        endDate: 'Jan 2013',
        title: 'Software Developer Engineer',
        company: 'Microsoft - Bing Core UX',
        work: [
            'Team lead for the Bing homepage, as well as the site-wide header, footer and left navigation, known as the front door UX. Migrated home and front door legacy C++ page components to C#.',
            'Delivered Bing homepage full screen images and video backgrounds and hot spots with editorial content.',
            'Managed site styles, created style guidelines, built the RTL converter, and championed and delivered a server-side CSS preprocessor in C# to improve consistency and help developer productivity.',
            'Owned many Bing features such as speller, auto correct, advanced search page, Xbox and iPad experiences.',
        ]
    },
    {
        startDate: 'Apr 2005',
        endDate: 'Sep 2005',
        title: 'Product Designer',
        company: 'Microsoft - MSN Shopping',
        work: [
            'Designed merchant and seasonal shopping guides in HTML, JavaScript and CSS.',
            'Built a newsletter builder web application.',
        ]
    },
    {
        startDate: 'Sep 2002',
        endDate: 'Apr 2005',
        title: 'Art Directory',
        company: 'Cardhaus Games Inc.',
        work: [
            'Managed all the print and web design in Adobe PhotoShop and Illustrator for Cardhaus Games which included site graphics, HTML CSS, flyers, brochures, packages, and product design.',
            'Developed a custom CMS in PHP and MySQL for Cardhaus.com and its affiliated sites to aggregate contextual news, content and SEO optimizations.',
        ]
    },

]

class Job extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, company, startDate, endDate, work} = this.props.job;
        return (
            <div className="job">
                <div className="date-end">{endDate}</div>
                <div className="job-content">
                    <h3>{company}</h3>
                    <div className="meta_data">{title}</div>
                    <ul className="jobs">
                        {work.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

class WorkExperience extends React.Component {
    constructor(props) {
        super(props);
        this.exp_container = React.createRef();
    }

    render() {
        return(
            <section className="experience" ref={this.exp_container}>
                <div className="center">
                    <a name="experience" className="jump-to"></a>
                    <h2>Work Experience</h2>
                    <div className="work_area">
                        <div className="timeline">
                        </div>
                        {work_data.map((job, index) => <Job key={index} job={job} />)}
                        <div class="date-end start">Sep 2002</div>
                    </div>
                    <h2 className="cert_header">Certificates</h2>
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

    componentDidMount() {
        const animateExp = () => {
            const container = this.exp_container.current;
            const scrollTop = container.getBoundingClientRect().top;
            if(scrollTop < window.innerHeight / 2) {
                this.exp_container.current.classList.add('animate');
            }
        }
        animateExp();
        window.onscroll = animateExp;
    }
}

// Map state from the Redux store to component props
const mapStateToProps = (state) => {
    return {
      // Map the required state properties here
    };
  };
  
  export default connect(mapStateToProps)(WorkExperience);
  