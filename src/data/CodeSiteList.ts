// Code site type
export type CodeSiteAttr = {
    title: string,
    link: string,
    icon?: string
}

// List of sites that I contribute to
const CodeSiteList: CodeSiteAttr[] = [
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

export default CodeSiteList;