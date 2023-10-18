import React, { useEffect, useRef } from 'react'
import '../../styles/home.css'

/**
 * The 'Home' page. Everything above the fold on load
 * @returns a Home component
 */
export default function Home (): React.JSX.Element {
    const animate: React.MutableRefObject<boolean> = useRef(false);

    // Triggers animation on page load
    useEffect(() => {
        animate.current = true;
    }, []);

    return (
    <div className={`${animate.current ? 'animate' : ''} home`}>
        <div className="home-background"></div>
        <h1><span>Hello</span><span className="load-in">, I'm <span className="name">Rob Barber</span></span></h1>
        <span className="dev">a senior software engineer</span>
        <div>
            <a href="#contact" className="call-to-action button no-hover">
                <span>Contact me</span>
            </a>
        </div>
        <a href="#projects" title="scroll to see more" className="scroll no-hover">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
        </a>
    </div>
    );
}
