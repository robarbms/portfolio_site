import React from 'react';
import styles from '../styles/projects.css';
import news_carousel from '../static/news_caro.jpg';
import keyboard from '../static/Screenshot 2023-05-22 124147.png';
import calendar from '../static/calendar.jpg';
import data_vis from '../static/data-vis.jpg';
import masonry from '../static/masonry.png';
import covid_tracker from '../static/covid_tracker.jpg';

export class Project extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title, tech, images, description_short, links} = this.props;
        let style = {};
        if (images && images.length > 0) {
            style = {
                backgroundImage: `url(${images[0].img})`
            }
        }
        return (
            <div className="project">
                <div class="img_wrap" style={style}>
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
        );
    }
}

export class CodeSource extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title, link, icon} = this.props;
        return(
            <a className="code_source" href={link} target="_blank" title={title}>
                <i className={icon || `devicon-${title.toLowerCase()}-plain`}></i> <span>{title}</span>
            </a>
        )
    }
}

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.projects = [
            {
                title: "News Carousel",
                description_short: "News carousel used for Edge new tab page and Windows 11. Custom web component built in the FAST open source library and deployed in Azure DevOps.",
                tech: [
                    {
                        title: "JavaScript"
                    },
                    {
                        title: "TypeScript"
                    },
                    {
                        title: "CSS3"
                    },
                    {
                        title: "Git"
                    },
                    {
                        title: "Azure"
                    }
                ],
                links: [
                    {
                        link: "https://codepen.io/kungfukarl/pen/eYyRLbq",
                        type: "Demo",
                        text: "Infopane"
                    },
                    {
                        link: "https://codepen.io/kungfukarl/pen/OJzgwxy",
                        type: "Demo",
                        text: "Tablist"
                    },
                    {
                        link: "https://codepen.io/kungfukarl/pen/vYpgrRB",
                        type: "Demo",
                        text: "Pagination"
                    }
                ],
                images: [
                    {
                        img: news_carousel,
                        alt: "News Carousel"
                    }
                ]
            },
            {
                title: "Keyboard Accessibility",
                description_short: "Keyboard accessibility scripts built to help with navigating news articles on the Edge new tab page and in the Windows 11 news feed.",
                tech: [
                    {
                        title: "JavaScript"
                    },
                    {
                        title: "TypeScript",
                    },
                    {
                        title: "CSS3"
                    },
                    {
                        title: "Git"
                    },
                    {
                        title: "Azure"
                    }
                ],
                links: [
                    {
                        link: "https://codepen.io/kungfukarl/pen/QWOqXeP",
                        type: "Demo",
                        text: "Keyboard navigation"
                    },
                    {
                        link: "https://codepen.io/kungfukarl/pen/PoOOyrz",
                        type: "Demo",
                        text: "Focus groups"
                    }
                ],
                images: [
                    {
                        img: keyboard,
                        alt: "Keyboard Accessibility"
                    }
                ]
            },
            {
                title: "Calendar Web Component",
                description_short: "Custom web component built for the FAST and FluentUI open source libraries. Highly customizable with built in localization.",
                tech: [
                    {
                        title: "JavaScript"
                    },
                    {
                        title: "CSS3"
                    },
                    {
                        title: "Git"
                    },
                    {
                        title: "Azure"
                    }
                ],
                links: [
                    {
                        link: "https://codepen.io/kungfukarl/pen/GRrdwNd",
                        type: "Demo",
                        text: "Calendar Component"
                    },
                    {
                        link: "https://github.com/microsoft/fast/tree/master/packages/web-components/fast-foundation/src/calendar",
                        type: "Source",
                        text: "FAST Calendar"
                    }
                ],
                images: [
                    {
                        img: calendar,
                        alt: "Calendar Component"
                    }
                ]
            },
            {
                title: "Bing Covid Tracker - News and Videos",
                description_short: "I built the news and videos vertical for the Bing Covid tracker. This was built in C#, React and Redux and then deployed to Azure DevOps.",
                tech: [
                    {
                        title: "JavaScript"
                    },
                    {
                        title: "CSS3"
                    },
                    {
                        title: "React"
                    },
                    {
                        title: "Redux",
                    },
                    {
                        title: "Azure"
                    },
                    {
                        title: "C#",
                        icon: "csharp"
                    }
                ],
                links: [
                    {
                        link: "https://searchengineland.com/bings-covid-19-tracker-filters-data-news-and-video-by-region-330773",
                        type: "Article",
                        text: "Search Engine Land"
                    },
                    {
                        link: "https://mashable.com/article/bing-coronavirus",
                        type: "Article",
                        text: "Mashable"
                    }
                ],
                images: [
                    {
                        img: covid_tracker,
                        alt: "Bing Covid Tracker"
                    }
                ]
            },
            {
                title: "Data Visualization Web Components",
                description_short: "A collection of data visualization web components built in vanilla JavaScript and CSS3. They are highly customizable and include animations.",
                tech: [
                    {
                        title: "JavaScript"
                    },
                    {
                        title: "CSS3"
                    },
                ],
                links: [
                    {
                        link: "https://codepen.io/kungfukarl/pen/KKWQqBx",
                        type: "Demo",
                        text: "Gauge Component"
                    },
                    {
                        link: "https://codepen.io/kungfukarl/pen/ExmRVMV",
                        type: "Demo",
                        text: "Graph Component"
                    },
                    {
                        link: "https://codepen.io/kungfukarl/pen/XWMZBKy",
                        type: "Demo",
                        text: "Pie Chart Component"
                    }
                ],
                images: [
                    {
                        img: data_vis,
                        alt: "Data Visualization Web Components"
                    }
                ]
            },
            {
                title: "Masonry Grid Layout Web Component",
                description_short: "A masonry gallery grid layout web component. Responsive web component that sizes each row to perserve image aspect ratios.",
                tech: [
                    {
                        title: "JavaScript"
                    },
                    {
                        title: "CSS3"
                    }
                ],
                links: [
                    {
                        link: "https://codepen.io/kungfukarl/pen/oNwBvqG",
                        type: "Demo",
                        text: "Masonry Component"
                    },
                    {
                        link: "https://codepen.io/kungfukarl/pen/XWzVqLN",
                        type: "Demo",
                        text: "Masonry Navigation"
                    }
                ],
                images: [
                    {
                        img: masonry,
                        alt: "Masonry Grid Layout Web Component"
                    }
                ]
            }
        ]

        this.code = [
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
    }

    render() {
        return(
            <section className="projects">
                <div className="center">
                    <a name="projects" className="jump-to"></a>
                    <h2>Projects</h2>
                    <p className="description">My most recent professional work was done for Microsoft for the Edge Browser and Windows 11, so the source code is not available for viewing. I included links to my prototypes to support the features that I built. I did include links to source code I wrote for the Microsoft open source libraries.</p>
                    <p className="description">If you have any questions about my work, please feel free to <a href="#contact">contact me</a>.</p>
                    <div className="projects-container">
                        {this.projects.map((project, index) => {
                            return (
                                <Project key={index} title={project.title} tech={project.tech} images={project.images} description_short={project.description_short} links={project.links} description={this.projects.description} />
                            )
                        })}
                    </div>
                    <h2>More work that I've done</h2>
                    <div className="more_work">
                        {this.code.map(({title, link, icon}, index) => <CodeSource key={index} title={title} link={link} icon={icon} />)}
                    </div>
                </div>
            </section>
        )
    }
}
