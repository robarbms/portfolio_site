export type CodeSite = {
    title: string,
    link: string,
    icon?: string
}

const CodeSiteList: CodeSite[] = [
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