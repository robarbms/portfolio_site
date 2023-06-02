import React from 'react';
import styles from '../styles/footer.css';
import Logo from './Logo';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer>
                <div className="center">
                    <Logo />
                    &#169; 2023 Rob Barber
                </div>
            </footer>
        )
    }
}
