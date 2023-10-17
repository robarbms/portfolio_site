export type JobListing = {
    startDate: string,
    endDate: string,
    title: string,
    company: string,
    work: string[],
    tech: {
        title: string,
        icon?: string
    }[]
}

/**
 * Data encapsulation of my work experience
 */
const JobList: JobListing[] = [
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
        ],
        tech: [
            {
                title: 'JavaScript'
            },
            {
                title: 'CSS3'
            },
            {
                title: 'TypeScript'
            },
            {
                title: 'NodeJs'
            },
            {
                title: 'Jest'
            },
            {
                title: 'Git'
            },
            {
                title: 'Azure',
            }
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
        ],
        tech: [
            {
                title: 'JavaScript'
            },
            {
                title: 'CSS3'
            },
            {
                title: 'Sass'
            },
            {
                title: 'React'
            },
            {
                title: 'Redux'
            },
            {
                title: 'AngularJS'
            },
            {
                title: 'Electron',
                icon: 'devicon-electron-original'
            },
            {
                title: 'C#',
                icon: 'devicon-csharp-plain'
            },
            {
                title: 'Go',
                icon: 'devicon-go-original-wordmark'
            },
            {
                title: 'Python'
            },
            {
                title: 'Azure',
            },
            {
                title: 'Git'
            }
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
        ],
        tech: [
            {
                title: 'JavaScript'
            },
            {
                title: 'CSS3'
            },
            {
                title: 'Less',
                icon: 'devicon-less-plain-wordmark'
            },
            {
                title: 'C++',
                icon: 'devicon-cplusplus-plain'
            },
            {
                title: 'C#',
                icon: 'devicon-csharp-plain'
            },
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
        ],
        tech: [
            {
                title: 'JavaScript'
            },
            {
                title: 'CSS3'
            },
            {
                title: 'PhotoShop'
            }
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
        ],
        tech: [
            {
                title: 'PhotoShop'
            },
            {
                title: 'Illustrator'
            },
            {
                title: 'Php'
            },
            {
                title: 'MySQL'
            },
            {
                title: 'JavaScript'
            },
            {
                title: 'CSS3'
            }
        ]
    },
]

export default JobList