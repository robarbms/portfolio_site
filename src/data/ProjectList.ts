import news_carousel from '../assets/news_caro.webp'
import keyboard from '../assets/keyboard_access_preview.webp'
import calendar from '../assets/calendar.webp'
import data_vis from '../assets/data-vis.webp'
import masonry from '../assets/masonry.webp'
import covid_tracker from '../assets/covid_tracker_preview.webp'

export type ProjectAttr = {
    title: string,
    description_short: string,
    description?: string,
    tech: {
        title: string,
        icon?: string
    }[],
    links: {
        link: string,
        type: 'Demo' | 'Source' | 'Article',
        text: string
    }[],
    images: {
        img: string,
        alt: string
    }[]
}

const ProjectList: ProjectAttr[] = [
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

export default ProjectList