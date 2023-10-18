/**
 * Data used for other methods to contact me
 */
export type MoreContactAttr = {
    title: string,
    text: string,
    link: string,
    icon?: string,
    devIcon?: string,
}

const MoreContactList: MoreContactAttr[] = [
    {
        title: "Telephone",
        text: "(425) 736-0936",
        link: "tel:4257360936",
        icon: "phone",
    },
    {
        title: "Email",
        text: "rob@robjbarber.com",
        link: "mailto:rob@robjbarber.com",
        icon: "email",
    },
    {
        title: "LinkedIn",
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/rob-barber-4a05b83/",
        devIcon: "devicon-linkedin-plain",
    }
];

export default MoreContactList;
