import { faPhone, faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type MoreContactAttr = {
    title: string,
    text: string,
    link: string,
    icon?: IconProp,
    devIcon?: string,
}

const MoreContactList: MoreContactAttr[] = [
    {
        title: "Telephone",
        text: "(425) 736-0936",
        link: "tel:4257360936",
        icon: faPhone,
    },
    {
        title: "Email",
        text: "rob@robjbarber.com",
        link: "mailto:rob@robjbarber.com",
        icon: faEnvelope,
    },
    {
        title: "LinkedIn",
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/rob-barber-4a05b83/",
        devIcon: "devicon-linkedin-plain",
    }
];

export default MoreContactList;
